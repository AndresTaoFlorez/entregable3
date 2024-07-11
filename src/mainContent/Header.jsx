
import { Link } from 'react-router-dom'
// import Nosotros from '../pages/Nosotros'
import '../style/Header.scss';
function Header() {
   return (<>
      <div className="headerContentFixed">
         <div className="headerContent">
            <div className="header">
               <a href="https://x.com/arepaehuevobog" target='_blank'>Visitanos en Twitter</a>
               <div className="links">
                  <Link to="/home" className="link">Home</Link>
                  <Link to="/nosotros" className="link">Nosotros</Link>
                  <Link to="/productos" className="link">Productos</Link>
               </div>
            </div>
         </div>
      </div>
   </>)
}

export default Header;