import { useState, useEffect } from  "uelements";

 function getWindowDimensions() {
  //  const { innerWidth: width, innerHeight: height } = window;
  //  document.documentElement.clientWidth
   const {  documentElement : { clientHeight : height , clientWidth : width } }  = document
   return {
    width,
    height
   };
  }

  

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}