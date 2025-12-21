"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode, CSSProperties } from "react"

// Animation variants
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
}

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
}

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
}

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
}

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
}

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
}

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
}

// Animated components
interface AnimatedProps {
    children: ReactNode
    className?: string
    delay?: number
    style?: CSSProperties
}

export function FadeInUp({ children, className, delay = 0, style }: AnimatedProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
                }
            }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    )
}

export function FadeInLeft({ children, className, delay = 0, style }: AnimatedProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: { opacity: 0, x: -40 },
                visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
                }
            }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    )
}

export function FadeInRight({ children, className, delay = 0, style }: AnimatedProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: { opacity: 0, x: 40 },
                visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
                }
            }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    )
}

export function ScaleIn({ children, className, delay = 0, style }: AnimatedProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }
                }
            }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    )
}

interface StaggerChildrenProps extends AnimatedProps {
    staggerDelay?: number
}

export function StaggerChildren({ children, className, staggerDelay = 0.1, style }: StaggerChildrenProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: 0.1
                    }
                }
            }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({ children, className, style }: Omit<AnimatedProps, 'delay'>) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                }
            }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    )
}

// 3D Card hover effect
interface Card3DProps {
    children: ReactNode
    className?: string
    style?: CSSProperties
    intensity?: number
}

export function Card3D({ children, className, style, intensity = 10 }: Card3DProps) {
    return (
        <motion.div
            whileHover={{
                scale: 1.02,
                rotateX: 0,
                rotateY: 0,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = ((y - centerY) / centerY) * -intensity
                const rotateY = ((x - centerX) / centerX) * intensity
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
            }}
            className={className}
            style={{
                ...style,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease'
            }}
        >
            {children}
        </motion.div>
    )
}

// Floating animation
interface FloatingProps {
    children: ReactNode
    className?: string
    duration?: number
    y?: number
}

export function Floating({ children, className, duration = 3, y = 10 }: FloatingProps) {
    return (
        <motion.div
            animate={{
                y: [-y, y, -y],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// Gradient text animation
export function GradientText({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <motion.span
            className={`bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] ${className || ''}`}
            animate={{ backgroundPosition: ['0% center', '200% center'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
            {children}
        </motion.span>
    )
}

// Glow pulse animation
export function GlowPulse({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            className={className}
            animate={{
                boxShadow: [
                    '0 0 20px rgba(var(--primary), 0.3)',
                    '0 0 40px rgba(var(--primary), 0.5)',
                    '0 0 20px rgba(var(--primary), 0.3)',
                ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
            {children}
        </motion.div>
    )
}
