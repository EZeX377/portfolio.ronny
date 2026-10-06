"use client";
import { useRef } from "react";
import { useAnimatedStyles } from "./useAnimatedStyles";

export default function MotionSurface({ as: Tag = "div", children, ...props }) {
  const ref = useRef(null);
  useAnimatedStyles(ref, null);
  return <Tag ref={ref} {...props}>{children}</Tag>;
}
