"use client";
import { useEffect } from "react";

export function useConnectorGeometry(ref) {
 useEffect(() => {
  const diagrams = [...ref.current.querySelectorAll("[data-slot~=\"method-diagram\"],[data-slot~=\"scope-study\"]")];
  const round = n => Math.round(n * 10) / 10;
  function box(element, base) {
    let x = 0, y = 0, node = element;
    while (node && node !== base) {
      x += node.offsetLeft || 0; y += node.offsetTop || 0;
      node = node.offsetParent;
      if (node && node !== base) { x += node.clientLeft; y += node.clientTop; }
    }
    const width = element.offsetWidth, height = element.offsetHeight;
    return { x, y, width, height, right: x + width, bottom: y + height, cx: x + width / 2, cy: y + height / 2 };
  }
  const arrow = (x, y, direction) => direction === 'right' ? `M${x-5} ${y-4}l5 4-5 4` : direction === 'up' ? `M${x-4} ${y+5}l4-5 4 5` : `M${x-4} ${y-5}l4 5 4-5`;
  function update(diagram) {
    const svg = diagram.querySelector("[data-slot~=\"method-connectors\"],[data-slot~=\"scope-links\"]");
    if (!svg || !diagram.clientWidth || !diagram.clientHeight) return;
    svg.setAttribute('viewBox', `0 0 ${diagram.clientWidth} ${diagram.clientHeight}`);
    const b = selector => box(diagram.querySelector(selector), diagram);
    const route = (name, d) => svg.querySelector(`[data-slot~="${name}"]`).setAttribute('d', d);
    const heads = [...svg.querySelectorAll("[data-slot~=\"flow-arrow\"]")];
    if (diagram.matches('[data-slot~="scope-study"]')) {
      const group = diagram.querySelector("[data-slot~=\"scope-sources\"]");
      const shift = new DOMMatrixReadOnly(getComputedStyle(group).transform).m42;
      const sources = [...diagram.querySelectorAll("[data-slot~=\"scope-source\"]")].map(el => { const source = box(el,diagram); source.y += shift; source.bottom += shift; return source; });
      const note = b("[data-slot~=\"scope-note\"]"), center = diagram.clientWidth / 2;
      const join = Math.max(...sources.map(s => s.bottom + 12), note.y - 34);
      const [left,middle,right] = sources;
      route('scope-route-a', `M${left.cx} ${left.bottom+5}V${join-8}q0 8 8 8H${center}`);
      route('scope-route-b', `M${middle.cx} ${middle.bottom+5}V${join}`);
      route('scope-route-c', `M${right.cx} ${right.bottom+5}V${join-8}q0 8-8 8H${center}`);
      route('scope-route-d', `M${center} ${join}V${note.y-5}`);
      heads[0].setAttribute('d',arrow(center-18,join,'right'));
      heads[1].setAttribute('d',arrow(center,join-8,'down'));
      heads[2].setAttribute('d',`M${center+23} ${join-4}l-5 4 5 4`);
      heads[3].setAttribute('d',arrow(center,note.y-5,'down'));
      const circle = svg.querySelector('circle');circle.setAttribute('cx',center);circle.setAttribute('cy',join+(note.y-join)/2);
    } else if (diagram.matches('[data-slot~="method-structure"]')) {
      const stops = [...diagram.querySelectorAll("[data-slot~=\"route-stop\"]")].map(el => box(el, diagram));
      const h = diagram.querySelector("[data-slot~=\"route-stop\"]>svg").getBoundingClientRect().height;
      const y = round(stops[0].y + h / 2);
      route('route-a', `M${stops[0].right+5} ${y}H${stops[1].x-5}M${stops[1].right+5} ${y}H${stops[2].x-5}`);
      const header = b("[data-slot~=\"map-header\"]"), role = b("[data-slot~=\"role-token\"]"), nav = b("[data-slot~=\"map-nav\"]");
      const headerEnd = header.y - 5;
      route('route-b', `M${stops[1].cx} ${stops[1].bottom+7}V${headerEnd}`);
      const roleH = diagram.querySelector("[data-slot~=\"role-token\"]>svg").getBoundingClientRect().height;
      const roleY = round(role.y + roleH / 2);
      route('route-c', `M${role.right+5} ${roleY}H${nav.x-5}`);
      heads[0].setAttribute('d', arrow(stops[1].x-5,y,'right') + arrow(stops[2].x-5,y,'right'));
      heads[1].setAttribute('d', arrow(stops[1].cx,headerEnd,'down'));
      heads[2].setAttribute('d', arrow(nav.x-5,roleY,'right'));
    } else if (diagram.matches('[data-slot~="method-interface"]')) {
      const card = b("[data-slot~=\"component-card\"]");
      const swatches = [...diagram.querySelectorAll("[data-slot~=\"state-swatch\"]")].map(el => box(el,diagram));
      const joinY = round(card.bottom + (swatches[0].y - card.bottom) * .55);
      route('route-a', `M${card.cx} ${card.bottom+5}V${joinY}`);
      route('route-b', swatches.map(s => `M${card.cx} ${joinY}H${s.cx}V${s.y-5}`).join(''));
      heads[0].setAttribute('d', swatches.map(s => arrow(s.cx,s.y-5,'down')).join(''));
      const circle = svg.querySelector('circle'); circle.setAttribute('cx',card.cx); circle.setAttribute('cy',joinY);
    } else {
      const spec = b("[data-slot~=\"spec-note\"]"), build = b("[data-slot~=\"build-tile\"]"), review = b("[data-slot~=\"review-token\"]"), release = b("[data-slot~=\"release-token\"]");
      const glyph = diagram.querySelector("[data-slot~=\"review-token\"] [data-slot~=\"source-symbol\"]");
      const glyphBox = box(glyph,diagram);
      const r = Math.min(8, Math.max(2,(build.cx-spec.right-5)/2));
      route('route-a', `M${spec.right+5} ${spec.cy}H${build.cx-r}q${r} 0 ${r} ${r}V${build.y-5}`);
      route('route-b', `M${build.right+5} ${build.cy}H${review.cx-8}q8 0 8-8V${review.bottom+7}`);
      const outside = Math.max(glyphBox.right+22,release.right-16), bottom = release.y-18;
      route('route-c', `M${glyphBox.right+5} ${glyphBox.cy}H${outside-8}q8 0 8 8V${bottom-8}q0 8-8 8H${release.cx+8}q-8 0-8 8V${release.y-5}`);
      heads[0].setAttribute('d',arrow(build.cx,build.y-5,'down'));
      heads[1].setAttribute('d',arrow(review.cx,review.bottom+7,'up'));
      heads[2].setAttribute('d',arrow(release.cx,release.y-5,'down'));
      const circles = svg.querySelectorAll('circle');
      circles[0].setAttribute('cx',build.cx); circles[0].setAttribute('cy',(spec.cy+build.y)/2);
      circles[1].setAttribute('cx',review.cx); circles[1].setAttribute('cy',(build.cy+review.bottom)/2);
    }
  }

  let frame = 0;
  const updateAll = () => diagrams.forEach(update);
  const schedule = () => { if (!frame) frame = requestAnimationFrame(() => { frame = 0; updateAll(); }); };
  const observer = new ResizeObserver(schedule);
  diagrams.forEach(diagram => {
    observer.observe(diagram);
    diagram.querySelectorAll("[data-slot~=\"method-piece\"],[data-slot~=\"scope-source\"],[data-slot~=\"scope-note\"]").forEach(piece => observer.observe(piece));
  });
  updateAll();
  let disposed = false;
  document.fonts.ready.then(() => { if (!disposed) schedule(); });
  return () => { disposed = true; observer.disconnect(); cancelAnimationFrame(frame); };
 }, [ref]);
}
