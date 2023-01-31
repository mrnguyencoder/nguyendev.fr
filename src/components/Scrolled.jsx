import React, { useState, useEffect } from 'react';

const useScrollPercentage = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollPercentage(scrollTop / scrollHeight * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPercentage;
};

const Scrolled = () => {
  const scrollPercentage = useScrollPercentage();

  return (
    <div className="fixed top-0 w-full h-1 z-20 overflow-hidden"
         style={{background: `linear-gradient(to right, 
                            transparent 0%, transparent ${scrollPercentage}%, 
                            #61dbfb ${scrollPercentage}%, #61dbfb 100%)`}}>
    </div>
  );
};

export default Scrolled;
