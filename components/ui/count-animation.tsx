"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function CountAnimation({
  number,
  className,
}: {
  number: number;
  className: string;
}) {
  const [initialNumber, setInitialNumber] = useState(0);
  const count = useMotionValue(initialNumber);

  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    setInitialNumber(number);
    const animation = animate(count, number, { duration: 2 });

    return animation.stop;
  }, [number]);

  return <motion.h1 className={cn(className)}>{rounded}</motion.h1>;
}
