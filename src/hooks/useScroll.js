import { useEffect, useState } from "react";

export default function useScroll() {
  const [shouldScrollToTop, setShouldScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const pageYOffset = window.pageYOffset;
      if (pageYOffset >= 500) {
        setShouldScrollToTop(true);
      } else {
        setShouldScrollToTop(false);
      }
    });
    return () => window.removeEventListener("scroll");
  }, []);

  const scrollToTop = () => window.scrollTo(0, 0);

  const scrollTo = (position) => {
    console.log(position);
    window.scrollTo({ top: position, left: 0, behavior: "smooth" });
  };

  return { shouldScrollToTop, scrollToTop, scrollTo };

  // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //   anchor.addEventListener("click", function (e) {
  //     e.preventDefault();

  //     document.querySelector(this.getAttribute("href")).scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   });
  // });
}
