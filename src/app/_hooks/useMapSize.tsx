'use client'

import { useEffect, useState } from 'react'

type MapSize = {
  width: number
  height: number
}

const BREAKPOINTS: Array<{ query: string; size: MapSize }> = [
  { query: '(max-width: 576px)', size: { width: 320, height: 400 } },
  { query: '(max-width: 768px)', size: { width: 500, height: 400 } },
  { query: '(max-width: 992px)', size: { width: 600, height: 500 } },
  { query: '(min-width: 993px)', size: { width: 800, height: 600 } },
]

function getSize(): MapSize {
  for (const { query, size } of BREAKPOINTS) {
    if (window.matchMedia(query).matches) return size
  }
  return { width: 800, height: 600 }
}

export default function useMapSize() {
  const [mapSize, setMapSize] = useState<MapSize | undefined>(undefined)

  useEffect(() => {
    setMapSize(getSize())

    const handlers = BREAKPOINTS.map(({ query }) => {
      const mq = window.matchMedia(query)
      const handler = () => setMapSize(getSize())
      mq.addEventListener('change', handler)
      return { mq, handler }
    })

    return () => {
      handlers.forEach(({ mq, handler }) => mq.removeEventListener('change', handler))
    }
  }, [])

  return mapSize
}
