"use client";
import { useLayoutEffect, useRef } from "react";
import { useAnimate } from "framer-motion";
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
     const elements = [ref.current, ...ref.current.querySelectorAll("*")].filter(element => getComputedStyle(element).getPropertyValue("--motion-duration"));
     for (const element of elements) {
      const computed = getComputedStyle(element);
      const owned = (computed.getPropertyValue("--motion-properties") || "transform,translate,opacity").split(",").map(v => v.trim()).filter(v => properties.includes(v));
      const before = Object.fromEntries(owned.map(prop => [prop, element.style.getPropertyValue(prop) ? computed.getPropertyValue(prop) : previous.current.get(element)?.[prop]]));
      running.current.get(element)?.stop();
      owned.forEach(prop => element.style.removeProperty(prop));
      const targetStyle = getComputedStyle(element);
      const target = Object.fromEntries(owned.map(prop => [prop, targetStyle.getPropertyValue(prop)]));
      previous.current.set(element, target);
      if (!motionEnabled) continue;
      const changed = owned.filter(prop => before[prop] !== undefined && before[prop] !== target[prop]);
      if (!changed.length) continue;
      const duration = seconds(targetStyle.getPropertyValue("--motion-duration")) || .85;
      const delay = seconds(targetStyle.getPropertyValue("--motion-delay"));
      const frames = Object.fromEntries(changed.map(prop => [camel(prop), prop === "visibility" && target[prop] === "visible" ? ["visible", "visible"] : [before[prop], target[prop]]]));
      const animation = animate(element, frames, { duration, delay, ease });
      running.current.set(element, animation);
      animation.then(() => {
        if (running.current.get(element) !== animation) return;
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
    const enter = () => updateRef.current();
    const leave = () => updateRef.current();
    element?.addEventListener("pointerenter", enter);
    element?.addEventListener("pointerleave", leave);
    return () => {
    element?.removeEventListener("pointerenter", enter);
    element?.removeEventListener("pointerleave", leave);
    updateRef.current = () => {};
    running.current.forEach(animation => animation.stop());
    previous.current.forEach((value, element) => Object.keys(value).forEach(prop => element.style.removeProperty(prop)));
    running.current.clear(); previous.current.clear();
    };
  }, [ref]);
}
