'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function useLocationHash() {
  const [currentHash, setCurrentHash] = useState('')
  const params = useParams()

  useEffect(() => {
    const syncHash = () => setCurrentHash(window.location.hash)
    syncHash()
    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [params])

  return [currentHash, setCurrentHash] as const
}
