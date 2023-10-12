"use client"
import { useEffect, useState } from "react";

enum Breakpoints {
    Phone= 576,
    Tablet= 768,
    Laptop= 992,
    Desktop= 1200,
    DesktopLarge= 1400
}

export default function useResponsive() {
    const [{
        isMobile,
        isTablet,
        isLaptop,
        isDesktop,
        isDesktopLarge,
    }, setSize] = useState({
        isMobile: window.innerWidth <= Breakpoints.Phone,
        isTablet: window.innerWidth > Breakpoints.Phone && window.innerWidth <= Breakpoints.Tablet,
        isLaptop: window.innerWidth > Breakpoints.Tablet && window.innerWidth <= Breakpoints.Laptop,
        isDesktop: window.innerWidth > Breakpoints.Laptop && window.innerWidth <= Breakpoints.Desktop,
        isDesktopLarge: window.innerWidth >= Breakpoints.Desktop,
    })

    useEffect(() => {
        const handleResize = () => {
            setSize(
                {
                    isMobile: window.innerWidth <= Breakpoints.Phone,
                    isTablet: window.innerWidth > Breakpoints.Phone && window.innerWidth <= Breakpoints.Tablet,
                    isLaptop: window.innerWidth > Breakpoints.Tablet && window.innerWidth <= Breakpoints.Laptop,
                    isDesktop: window.innerWidth > Breakpoints.Laptop && window.innerWidth <= Breakpoints.Desktop,
                    isDesktopLarge: window.innerWidth >= Breakpoints.Desktop,
                }
            )
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return {
        isMobile,
        isTablet,
        isLaptop,
        isDesktop,
        isDesktopLarge,
    }
}