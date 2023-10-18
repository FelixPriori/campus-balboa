import { useEffect, useState } from "react"
import useResponsive from "./useResponsive";

type MapSize = {
    width: number;
    height: number;
}

export default function useMapSize() {
    const [mapSize, setMapSize] = useState<MapSize>()
    const {isMobile, isTablet, isLaptop, isDesktop} = useResponsive()
    
    useEffect(() => {
        if (isMobile) {
            setMapSize({width: 320, height: 400})
        } else if (isTablet) {
            setMapSize({width: 500, height: 400})
        } else if (isLaptop) {
            setMapSize({width: 600, height: 500})
        } else if (isDesktop) {
            setMapSize({width: 800, height: 600})
        }

    }, [isMobile, isTablet, isLaptop, isDesktop])

    return mapSize
}