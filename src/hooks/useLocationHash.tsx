import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useLocationHash() {
    const [currentHash, setCurrentHash] = useState('')
    const params = useParams()
  
    useEffect(() => {
        const hash = window.location.hash;
        setCurrentHash(hash)
    }, [params])

    return [currentHash, setCurrentHash]
}