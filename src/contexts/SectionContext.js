import { useRef, createContext, useContext } from "react";

export const SectionContext = createContext();

export default function SectionProvider({ children }) {
  const projectRef = useRef();
  const getInTouchRef = useRef();
  const aboutMeRef = useRef();

  return (
    <SectionContext.Provider value={{ projectRef, getInTouchRef, aboutMeRef }}>
      {children}
    </SectionContext.Provider>
  );
}

export const useSection = () => useContext(SectionContext);
