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

    const scrollToTop = () => window.scrollTo(0, 0) 

    const scrollTo = (position) => window.scrollTo(0, position) 
    return { shouldScrollToTop, scrollToTop, scrollTo }
}