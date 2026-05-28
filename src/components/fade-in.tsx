"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  className?: string;
}

export const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
  distance = 30,
  duration = 0.6,
  className = "",
  ...props
}: FadeInProps) => {
  // Determine initial translation based on direction
  let x = 0;
  let y = 0;
  
  if (direction === "up") y = distance;
  if (direction === "down") y = -distance;
  if (direction === "left") x = distance;
  if (direction === "right") x = -distance;

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
