import { useEffect, useMemo, useState } from 'react'
import useResponsive from './useResponsive'

type MapSize = {
  width: number
  height: number
}

export default function useMapSize() {
  const [mounted, setMounted] = useState(false)
  const { isMobile, isTablet, isLaptop, isDesktop, isLargeDesktop } = useResponsive()

  useEffect(() => {
    const activate = () => setMounted(true)
    activate()
  }, [])

  const mapSize = useMemo<MapSize | undefined>(() => {
    if (!mounted) return undefined
    if (isMobile) return { width: 320, height: 400 }
    if (isTablet) return { width: 500, height: 400 }
    if (isLaptop) return { width: 600, height: 500 }
    if (isDesktop || isLargeDesktop) return { width: 800, height: 600 }
    return undefined
  }, [mounted, isMobile, isTablet, isLaptop, isDesktop, isLargeDesktop])

  return mapSize
}
