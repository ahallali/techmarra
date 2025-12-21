"use client"

import { useEffect, useRef, useCallback } from "react"

interface AntigravityBackgroundProps {
    className?: string
    style?: React.CSSProperties
}

export function AntigravityBackground({ className = "", style }: AntigravityBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInteractiveRef = useRef(false)

    // Load the Houdini PaintWorklet
    useEffect(() => {
        if (typeof window !== "undefined" && "paintWorklet" in CSS) {
            try {
                // @ts-expect-error - paintWorklet is not in TypeScript types
                CSS.paintWorklet.addModule(
                    "https://unpkg.com/css-houdini-ringparticles/dist/ringparticles.js"
                )
            } catch (error) {
                console.warn("Failed to load ring particles PaintWorklet:", error)
            }
        }
    }, [])

    // Handle mouse movement to make ring follow cursor
    // Handle mouse movement to make ring follow cursor
    const handlePointerMove = useCallback((e: PointerEvent | MouseEvent) => {
        const container = containerRef.current
        if (!container) return

        if (!isInteractiveRef.current) {
            container.classList.add("interactive")
            isInteractiveRef.current = true
        }

        const xPercent = (e.clientX / window.innerWidth) * 100
        const yPercent = (e.clientY / window.innerHeight) * 100

        container.style.setProperty("--ring-x", String(xPercent))
        container.style.setProperty("--ring-y", String(yPercent))
        container.style.setProperty("--ring-interactive", "1")
    }, [])


    // Handle mouse leaving the container
    const handlePointerLeave = useCallback(() => {
        const container = containerRef.current
        if (!container) return

        if (!container) return

        container.classList.remove("interactive")
        isInteractiveRef.current = false

        // Smoothly return to center
        container.style.setProperty("--ring-x", "50")
        container.style.setProperty("--ring-y", "50")
        container.style.setProperty("--ring-interactive", "0")
    }, [])

    // Set up event listeners
    useEffect(() => {
        window.addEventListener("pointermove", handlePointerMove)
        window.addEventListener("pointerleave", handlePointerLeave)

        return () => {
            window.removeEventListener("pointermove", handlePointerMove)
            window.removeEventListener("pointerleave", handlePointerLeave)
        }
    }, [handlePointerMove, handlePointerLeave])

    return (
        <div
            ref={containerRef}
            className={`antigravity-bg ${className}`}
            style={style}
            aria-hidden="true"
        />
    )
}
