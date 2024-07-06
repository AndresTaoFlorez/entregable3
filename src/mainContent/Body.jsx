import { useState, useRef, useEffect } from 'react';
import useWidth from '../customHooks/useWidth';
import '../style/Body.scss';
function Body() {
   const bodyWidthRef = useRef('')
   const imageContentRef = useRef('')

   const [Widths, setWidths] = useState({
      bodyWidth: 0,
      bodyWidthBreak: Boolean,
      imageContentWidth: 0
   });
   const bodyWidth_hook = useWidth(bodyWidthRef)
   const imageContentRef_hook = useWidth(imageContentRef)
   useEffect(() => {
      if (bodyWidth_hook) {
         let newbodyWidthBreak = Boolean
         if (bodyWidth_hook < 1000) {
            newbodyWidthBreak = true
         } else { newbodyWidthBreak = false }
         setWidths({ bodyWidth: bodyWidth_hook, bodyWidthBreak: newbodyWidthBreak, imageContentWidth: imageContentRef_hook })
      }
   }, [bodyWidth_hook, imageContentRef_hook]);


   return (<>
      <div className="body" ref={bodyWidthRef}>
         <div className={(Widths.bodyWidthBreak) ? 'presentation' : 'presentation presentation-view-2'}>
            <div className="imageContent" ref={imageContentRef}>
               <h1 style={{ fontSize: ((0.11 * Widths.imageContentWidth) > 160 ? '160px' : (0.11 * Widths.imageContentWidth)) + 'px' }}>Carimañolas Delicias</h1>
               <div className="image"></div>
            </div>
            <section className='section'>
               <div className="products">
                  <h1>Productos</h1>
                  <h2>Carimalola de pollo</h2>
                  <h2>Carimañola de carne</h2>
                  <h2>Carimañola de queso</h2>
                  <h2>Carimañolas de mixtas</h2>
               </div>
            </section>
         </div>
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
            <section className='section'>
               <div>
                  <h1>Valores de la Empresa</h1>
                  <h2>Carimañolas Delicias S.A.S</h2>
                  <p>Honestidad: Actuar con integridad y sinceridad en todas las operaciones y relaciones comerciales, garantizando la confianza de nuestros clientes y socios.
                     Calidad: Compromiso con la excelencia en cada uno de nuestros productos, asegurando que las carimañolas sean siempre frescas y deliciosas.
                     Orientación al Cliente: Poner a nuestros clientes en el centro de todas nuestras decisiones, ofreciendo un servicio excepcional y personalizado.</p>

               </div>
            </section>
            <section className='section section-2'>
               <div>
                  <h2>Sobre nosotros</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rem expedita eum libero assumenda magnam quia quis alias accusantium voluptate consequuntur, ex beatae, minima cupiditate, ullam aliquam quas officia ipsam?</p>
               </div>
               <img src="https://congeladosfarah.com/wp-content/uploads/2021/06/Carimanolas-con-Queso-Farah-768x512.jpg" alt="Carimañola" />
            </section>
            <section className='section section-3'>
               <div className="title">
                  <h1>Objetivos</h1>
               </div>
               <div className='section-3-1'>
                  <div>
                     <h2>Corto Plazo:</h2><p>Establecer la marca y captar una base sólida de clientes locales.</p>
                  </div>
                  <div>
                     <h2>Mediano Plazo:</h2><p>Expandir la distribución a mercados y eventos locales.</p>
                  </div>
                  <div>
                     <h2>Largo Plazo:</h2><p>Abrir sucursales en diferentes ciudades y explorar ventas en línea.</p>
                  </div>
               </div>
            </section>
         </div>
      </div >
   </>)
}

export default Body;