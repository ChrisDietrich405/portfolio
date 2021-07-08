import { useEffect, useState } from "react"

export default function useScroll() {
    const [shouldScrollToTop, setShouldScrollToTop] = useState(false)
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const pageYOffset = window.pageYOffset
            if(pageYOffset >= 500) {
                setShouldScrollToTop(true) 
            } else {
                setShouldScrollToTop(false)
            }
        })
        return () => window.removeEventListener("scroll")
    }, [])
    return { shouldScrollToTop }
}