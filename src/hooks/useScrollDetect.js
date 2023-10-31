// useScrollDetect.js
import { useState, useEffect } from 'react';

const useScrollDetect = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !hasScrolled) {
        setHasScrolled(true);
      } else if (window.scrollY <= 0 && hasScrolled) {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  return hasScrolled;
};

export default useScrollDetect;
