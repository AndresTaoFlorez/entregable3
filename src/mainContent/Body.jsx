import { useState } from 'react';
import '../style/Body.scss';
function Body() {
   const [view, setView] = useState(false);
   return (<>
      <div className="body">
         <div className={view?'presentation-view-1':'presentation-view-2'}>
            <div className="imageContent">
               <div className="image"></div>
            </div>
         </div>
         <button onClick={()=>setView(!view)}>Change view</button>
         <div className="bodyContent">
            <section className='section section-1'>
               <div className="vision">
                  <h2>Vision</h2>
                  <p>Convertirnos en el referente principal de carimañolas en la región, ofreciendo un producto delicioso y de alta calidad, contribuyendo al desarrollo económico local.</p>
               </div>
               <div className="mision">
                  <h2>Vision</h2>
                  <p>Ofrecer carimañolas tradicionales con ingredientes frescos y de calidad, satisfaciendo a nuestros clientes con un servicio excepcional y un sabor auténtico.</p>
               </div>
            </section>
         </div>
      </div>
   </>)
}

export default Body;