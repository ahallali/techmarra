"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface TypewriterTextProps {
    children: string
    className?: string
    as?: React.ElementType
    delay?: number
    style?: React.CSSProperties
}

export function TypewriterText({
    children,
    className,
    as: Component = "span",
    delay = 0,
    style,
}: TypewriterTextProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setIsVisible(true)
                        }, delay * 1000)
                        observer.disconnect()
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [delay])

    return (
        <Component
            ref={ref}
            className={cn("typewriter inline-block leading-tight", isVisible && "animate", className)}
            style={
                {
                    ...style,
                    "--n": children.length,
                } as React.CSSProperties
            }
        >
            {children}
        </Component>
    )
}
