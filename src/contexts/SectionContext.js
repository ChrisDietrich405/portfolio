import { useRef, createContext } from "react"

export const SectionContext = createContext()

export default function SectionProvider({children}) {
    const projectRef = useRef()
    const getInTouchRef = useRef()

    return (
        <SectionContext.Provider value={{projectRef, getInTouchRef}}>
            {children}
        </SectionContext.Provider>)
}