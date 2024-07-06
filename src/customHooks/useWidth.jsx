import { useState, useEffect } from 'react'

// this custom hook provides the width of the element in dom
const useWidth = (ref) => {
   const [width, setWidth] = useState(0)

   useEffect(() => {
      const handleResize = () => {
         setWidth(ref.current.clientWidth)
      }
      window.addEventListener("resize", handleResize)
      return () => {
         window.removeEventListener("resize", handleResize)
      }
   }, [ref])
   if(width == 0){
      setWidth(ref.current.clientWidth)
      return width
   }
   return width
}

export default useWidth