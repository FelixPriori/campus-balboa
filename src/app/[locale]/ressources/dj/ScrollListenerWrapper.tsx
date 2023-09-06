"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ScrollListenerWrapper({children}: {children: React.ReactNode}) {
    const router = useRouter()
    useEffect(() => {
        const onScroll = () => {
          const section = document.querySelectorAll('div[id]');
          section.forEach(div => {
            const rect = div.getBoundingClientRect();
            if (rect.top > 0 && rect.top < 150) {
              router.push(`#${div.id}`, {scroll: false})
            }
          });
        }
        
        document.addEventListener('scroll', onScroll)
    
        return () => {
          document.removeEventListener('scroll', onScroll)
        }
    }, [])
    
    
    return (<div>
        {children}
    </div>)
}