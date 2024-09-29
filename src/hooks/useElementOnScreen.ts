import { useEffect, useRef, useState } from 'react';

export function useElementOnScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const container = useRef<null | any>(null);

  const callbackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    };

    
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction);
    let currentEl: any;
    if (container.current) {
      observer.observe(container.current);
    }


    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
        container.current = null;
      }
    };
  }, []);

  return { container, isVisible };
}
