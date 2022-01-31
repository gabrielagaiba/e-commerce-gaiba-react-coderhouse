import "./scss/style.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import ItemListContainer from "./components/main/ItemListContainer";
import Carrito from "./components/main/Carrito";
import Error from "./components/main/Error";
import CustomProvider from './CartContext'
import Formulario from "./components/main/Formulario";

function App() {

  return (
    <CustomProvider>
      <BrowserRouter>
        <NavBar />
        <main className="main-style">
          <Routes>            
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/categorias/:nombreCategoria" element={<ItemListContainer />}/>
            <Route path="/item/:idProducto" element={<ItemDetailContainer />}/>
            <Route path="/carrito" element={ <Carrito /> } />
            <Route path="/formulario" element={ <Formulario />} />
            <Route path="*" element={ <Error /> } />            
          </Routes>
        </main>
      </BrowserRouter>
    </CustomProvider>
  )
}

export default App;