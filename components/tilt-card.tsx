"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface TiltCardProps {
    children: React.ReactNode
    className?: string
    gradientColor?: string
}

export function TiltCard({ children, className, gradientColor = "255, 255, 255" }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 })
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 })

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"])

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = ref.current!.getBoundingClientRect()

        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    // Glare effect position
    const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"])
    const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"])
    const glareOpacity = useTransform(x, [-0.5, 0.5], [0, 0.4]) // Simplistic glare opacity based on X movement

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={cn("relative will-change-transform perspective-1000", className)}
        >
            <div
                style={{
                    transform: "translateZ(20px)",
                }}
                className="relative z-10 h-full"
            >
                {children}
            </div>

            {/* Glare/Sheen */}
            <motion.div
                className="absolute inset-0 pointer-events-none z-20 rounded-[inherit]"
                style={{
                    background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(${gradientColor}, 0.2) 0%, transparent 80%)`,
                    opacity: 0.1, // Base opacity, increased by movement if desired
                }}
            />
        </motion.div>
    )
}
