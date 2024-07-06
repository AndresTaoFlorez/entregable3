import { useState, useRef, useEffect } from 'react'
import useWidth from '../customHooks/useWidth.jsx'

import '../assets/style/Card.css'
function Card({image}) {
   const [direction, setDirection] = useState({ "width": 0, "state": true })
   const paragraph = useRef(0)
   const Width = useWidth(paragraph)

   useEffect(()=>{
      if(Width < 500){
         setDirection({width: Width, state: true})
      }else{
         setDirection({width: Width, state: false})
      }
      console.log(direction.width)
   },[Width])


   return (
      <>
         <div className='card' >
            <div className="cardHeader">
               <h1>This is the card header</h1>
            </div>
            <div className={`cardBody ${direction.state ? "" : "cardBody-h"}`} ref={paragraph}>
               <div className="carParagraph">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio soluta doloremque sunt obcaecati ullam ipsam reiciendis quae dolorum hic molestiae.</p>
               </div>
               <div className="cardImage">
                  <img src={image} alt="Photograph" />
               </div>
            </div>
         </div>
      </>
   )
}

export default Card

