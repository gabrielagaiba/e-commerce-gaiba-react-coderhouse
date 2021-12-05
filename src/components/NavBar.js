import CartWidget from "./CartWidget";
import NavBarItem from "./NavBarItem";

const itemNav = ['Tienda', 'Locales', 'Franquicias', 'Nosotros', 'Contacto']

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-bar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src="/logo-rabona.png" className="logo" alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {itemNav.map((elemento, index) => <NavBarItem itemNavBar={elemento} key={index}/>)}
          </ul>
          <CartWidget/>
        </div>
      </div>
    </nav>
  )
}
  
export default NavBar;