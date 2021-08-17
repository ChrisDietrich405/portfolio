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
        //cleanup function 
    }, [])

    const scrollToTop = () => window.scrollTo(0, 0) //refers to the top of page 
                                             //first 0 refers to x and the second 0 refers to the y 

    const scrollTo = (position) => window.scrollTo(0, position) //referring to the element
    return { shouldScrollToTop, scrollToTop, scrollTo }
}