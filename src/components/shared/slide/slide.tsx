import React from "react";
import { motion } from "framer-motion";

interface IProps {
    children: React.ReactNode;
    delay: number;
    className?: string;
}

export default function Slide({ children, delay, className }: IProps) {
    return (
        <motion.div
            className={className ?? ""}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                ease: "easeInOut",
                duration: 0.3,
                delay: delay,
                stiffness: 0.5,
            }}
        >
            {children}
        </motion.div>
    );
}
