import { useEffect, useState } from "react";

export const useLazyLoad = (elementRef, options) => {
  const [isVisible, setIsVisible] = useState();

  useEffect(() => {
    const callbackFunction = function (entries) {
      const [entry] = entries;
      if (!isVisible && entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(callbackFunction, options);
    const cur = elementRef.current;
    if (cur && !isVisible) {
      observer.observe(cur);
    }
    return () => {
      observer.disconnect();
    };
  }, [elementRef, isVisible, options]);
  return [isVisible];
};
