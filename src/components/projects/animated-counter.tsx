"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  label: string;
};

const AnimatedCounter = ({
  from,
  to,
  duration = 1.6,
  suffix = "",
  label,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString()
  );
  const inView = useInView(ref, { once: true, amount: 0.65 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [count, duration, inView, to]);

  useEffect(() => {
    if (!inView) {
      count.set(from);
    }
  }, [count, from, inView]);

  return (
    <motion.div
      ref={ref}
      className="metric-card"
      initial={{ rotateX: -90, opacity: 0 }}
      whileInView={{ rotateX: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.65 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.span className="metric-value">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.span>
      <span className="metric-label">{label}</span>
    </motion.div>
  );
};

export default AnimatedCounter;
