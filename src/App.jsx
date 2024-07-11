import './style/App.scss';
import Header from './mainContent/Header.jsx';
import Productos from './pages/Productos.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Body from './mainContent/Body.jsx';
import Footer from './mainContent/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
   return (
      <BrowserRouter>
         <div className="mainContent">
            <Header />
            <Routes> {/*Content in Body*/}
               <Route path="/" element={<Body />} />
               <Route path="/home" element={<Body />} />
               <Route path='/productos' element={<Productos />}/>
               <Route path="/nosotros" element={<Nosotros />} />
            </Routes>
            <Footer />
         </div>
      </BrowserRouter>
   )
}

export default App
