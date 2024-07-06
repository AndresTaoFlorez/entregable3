
import '../style/Header.scss';
function Header() {
   return (
      <div className="headerContent">
         <div className="header">
            <a href="https://x.com/arepaehuevobog" target='_blank'>Visitanos en Twitter</a>
            {/* <nav>Carimañolas Delicia</nav> */}
            <div className="buttons">
               <button className='button'>Nosotros</button>
               <button className='button'>Productos</button>
            </div>
         </div>
      </div>
   )
}

export default Header;