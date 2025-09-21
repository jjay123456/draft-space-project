import { useEffect, useState, RefObject } from 'react';

interface UseIntersectionObserverProps {
  sectionRefs: RefObject<HTMLElement>[];
  threshold?: number;
}

export const useIntersectionObserver = ({ 
  sectionRefs, 
  threshold = 0.5 
}: UseIntersectionObserverProps) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = sectionRefs.findIndex(
              ref => ref.current === entry.target
            );
            if (sectionIndex !== -1) {
              setActiveSection(sectionIndex);
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs, threshold]);

  const scrollToSection = (index: number) => {
    if (sectionRefs[index]?.current) {
      sectionRefs[index].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return {
    activeSection,
    scrollToSection
  };
};