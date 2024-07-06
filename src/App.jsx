import './style/App.scss';
import Header from './mainContent/Header.jsx';
import Body from './mainContent/Body.jsx';
import Footer from './mainContent/Footer.jsx';
function App() {
   return (
      <>
         <div className="mainContent">
            <Header/>
            <Body/>
            <Footer/>
         </div>
      </>
   )
}

export default App
