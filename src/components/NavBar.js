import CartWidget from "./CartWidget";
import NavBarItem from "./NavBarItem";
import { useConsumirContexto } from "../CartContext";
import { Link } from "react-router-dom";

const itemNav = [
  { name: "Pizzas", url: "/categorias/pizzas", id: 1 },
  { name: "Cervezas", url: "/categorias/cervezas", id: 2 },
]


const NavBar = () => {
  const { carrito } = useConsumirContexto()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-bar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src="/logo-rabona.png" className="logo" alt="logo"/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {itemNav.map((elemento) => <NavBarItem itemNavBar={elemento} key={elemento.id}/>)}
          </ul>
           { carrito.length ? 
                <CartWidget />
                : null }
        </div>
      </div>
    </nav>
  )
}
  
export default NavBar;