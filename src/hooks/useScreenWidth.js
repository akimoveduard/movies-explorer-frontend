import React from 'react';

const getScreenWidth = () => {
  return document.documentElement.clientWidth;
};

export function useScreenWidth() {
  
  const [screenWidth, setScreenWidth] = React.useState(getScreenWidth());

  React.useEffect(() => {
      const handleResizeScreen = () => {
        setTimeout(() => {
          setScreenWidth(getScreenWidth());
        }, 1000);
      };
    window.addEventListener('resize', handleResizeScreen);
    return () => window.removeEventListener('resize', handleResizeScreen);
  }, []);

  return(screenWidth);
}