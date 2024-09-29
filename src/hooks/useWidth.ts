import { useEffect, useState } from 'react';

export const useWidth = () => {
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };

    document.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('resize', handleResize);
    }
  }, []);

  return width;
};
