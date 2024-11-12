"use client";
import { HTMLAttributes, useEffect, useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  block?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const angle = useMotionValue(45);
  const background = useMotionTemplate`linear-gradient(var(--color-gray-950),var(--color-gray-950)) padding-box,conic-gradient(from ${angle}deg,#3388ff20,white,rgb(139 92 246 / 0.2),#3388ff20) border-box`;
  useEffect(() => {
    if (isHovered) {
      animate(angle, angle.get() + 360, {
        duration: 1,
        ease: "linear",
        repeat: Infinity,
      });
    } else {
      animate(angle, 45, { duration: 0.5 });
    }
  }, [isHovered, angle]);
  const {
    className = "border-gradient text-xs tracking-widest uppercase font-bold h-10 px-4 rounded w-fit",
    children,
    variant = "primary",
    ...otherProps
  } = props;
  return (
    <motion.button
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
      style={{
        background: background,
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
