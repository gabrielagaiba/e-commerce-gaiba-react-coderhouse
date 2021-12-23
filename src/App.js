import './scss/style.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import ItemListContainer from './components/main/ItemListContainer';
import Locales from "./components/main/Locales";
import Franquicias from "./components/main/Franquicias";
import Nosotros from "./components/main/Nosotros";
import Contacto from "./components/main/Contacto";
import Carrito from "./components/main/Carrito";
import Error from "./components/main/Error"

function App() {

  return (
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>            
            <Route path="/" element={<ItemListContainer greeting="Gaby" />}/>
            <Route path="/categorias/:nombreCategoria" element={<ItemListContainer greeting="Gaby" />}/>
            <Route path="/item/:idProducto" element={<ItemDetailContainer />}/>
            <Route path="/locales" element={ <Locales />} />
            <Route path="/franquicias" element={ <Franquicias />} />
            <Route path="/nosotros" element={ <Nosotros /> } />
            <Route path="/contacto" element={ <Contacto /> } />
            <Route path="/carrito" element={ <Carrito /> } />
            <Route path="*" element={ <Error /> } />            
          </Routes>
        </main>
      </BrowserRouter>  
  )
}

export default App;