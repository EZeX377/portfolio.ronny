"use client";
import { useLayoutEffect, useRef } from "react";
import { useAnimate } from "framer-motion/mini";
import { usePortfolio } from "./PortfolioProvider";

const ease = [.22, 1, .36, 1];
const properties = ["transform", "translate", "rotate", "scale", "opacity", "width", "height", "left", "top", "stroke-dashoffset", "visibility"];
const camel = value => value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
const seconds = value => (Number.parseFloat(value) || 0) / (value.trim().endsWith("ms") ? 1000 : 1);

/** Animate utility-defined state changes; React and Tailwind still own the resting styles. */
export function useAnimatedStyles(ref, state) {
  const [, animate] = useAnimate();
  const previous = useRef(new Map());
  const running = useRef(new Map());
  const updateRef = useRef(() => {});
  const { initialized, motionEnabled } = usePortfolio();

  useLayoutEffect(() => {
    if (!ref.current || !initialized) return;
    const update = () => {
     const elements = [ref.current, ...ref.current.querySelectorAll("*")].filter(element => !element.closest('[data-slot~="method-connectors"], [data-slot~="scope-links"], [data-slot~="profile-portrait"], [data-slot~="connection-flow"]') && getComputedStyle(element).getPropertyValue("--motion-duration"));
     for (const element of elements) {
      const computed = getComputedStyle(element);
      const owned = (computed.getPropertyValue("--motion-properties") || "transform,translate,opacity").split(",").map(v => v.trim()).filter(v => properties.includes(v));
      const active = running.current.get(element);
      const lastTarget = previous.current.get(element);
      // Snapshot before suspending our effects: computed styles are live objects.
      const before = Object.fromEntries(owned.map(prop => [prop, active ? computed.getPropertyValue(prop) : lastTarget?.[prop]]));
      const savedStyles = owned.map(prop => [prop, element.style.getPropertyValue(prop), element.style.getPropertyPriority(prop)]);
      const suspended = (active?.native || []).map(animation => ({ animation, effect: animation.effect, time: animation.currentTime }));
      suspended.forEach(({ animation }) => { animation.effect = null; });
      if (active) active.properties.forEach(prop => element.style.removeProperty(prop));
      const targetStyle = getComputedStyle(element);
      const target = Object.fromEntries(owned.map(prop => [prop, targetStyle.getPropertyValue(prop)]));
      const duration = seconds(targetStyle.getPropertyValue("--motion-duration")) || .85;
      const delay = seconds(targetStyle.getPropertyValue("--motion-delay"));
      savedStyles.forEach(([prop, value, priority]) => {
        if (value) element.style.setProperty(prop, value, priority);
        else element.style.removeProperty(prop);
      });
      suspended.forEach(({ animation, effect, time }) => {
        animation.effect = effect;
        if (time !== null) animation.currentTime = time;
      });
      // Crossing children must not interrupt an animation with the same destination.
      if (motionEnabled && active && owned.every(prop => lastTarget?.[prop] === target[prop])) continue;
      active?.controls.stop();
      active?.properties.forEach(prop => element.style.removeProperty(prop));
      running.current.delete(element);
      previous.current.set(element, target);
      if (!motionEnabled) continue;
      const changed = owned.filter(prop => before[prop] !== undefined && before[prop] !== target[prop]);
      if (!changed.length) continue;
      const frames = Object.fromEntries(changed.map(prop => {
        const keyframes = prop === "visibility" && target[prop] === "visible" ? ["visible", "visible"] : [before[prop], target[prop]];
        return [camel(prop), prop === "opacity" ? keyframes.map(Number) : keyframes];
      }));
      const existing = new Set(element.getAnimations());
      const animation = animate(element, frames, { duration, delay: active ? 0 : delay, ease });
      const entry = { controls: animation, properties: changed, native: element.getAnimations().filter(animation => !existing.has(animation)) };
      running.current.set(element, entry);
      animation.then(() => {
        if (running.current.get(element) !== entry) return;
        changed.forEach(prop => element.style.removeProperty(prop));
        running.current.delete(element);
      });
     }
    };
    updateRef.current = update;
    update();
  }, [ref, state, initialized, motionEnabled, animate]);

  useLayoutEffect(() => {
    const element = ref.current;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => updateRef.current());
    };
    const focusBoundary = event => {
      if (!element.contains(event.relatedTarget)) update();
    };
    element?.addEventListener("pointerenter", update);
    element?.addEventListener("pointerleave", update);
    element?.addEventListener("focusin", focusBoundary);
    element?.addEventListener("focusout", focusBoundary);
    return () => {
    cancelAnimationFrame(frame);
    element?.removeEventListener("pointerenter", update);
    element?.removeEventListener("pointerleave", update);
    element?.removeEventListener("focusin", focusBoundary);
    element?.removeEventListener("focusout", focusBoundary);
    updateRef.current = () => {};
    running.current.forEach(animation => animation.controls.stop());
    previous.current.forEach((value, element) => Object.keys(value).forEach(prop => element.style.removeProperty(prop)));
    running.current.clear(); previous.current.clear();
    };
  }, [ref]);
}
