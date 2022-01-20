import React from "react";
//import Carrito from "./Carrito";

const Formulario = () => {
    
    return(
    <form className="row g-3">
        <div className="col-md-6">
            <label for="inputPassword4" className="form-label">Nombre y Apellido</label>
            <input type="text" className="form-control" id="inputPassword4" placeholder="Nombre y apellido"/>
        </div>
        <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
        </div>
        <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Teléfono</label>
            <input type="number" className="form-control" id="inputEmail4" placeholder="Teléfono"/>
        </div>
        <div className="col-12">
            <label for="inputAddress" className="form-label">Direccion</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="Dirección"/>
        </div>
        <div className="col-md-4">
            <label for="inputState" className="form-label">Medio de pago</label>
            <select id="inputState" className="form-select" defaultValue={1}>
                <option value={1}>Tarjeta de credito</option>
                <option value={2}>Tarjeta de débito</option>
                <option value={3}>Efectivo</option>  
            </select>
        </div>
        <div className="col-12">
            <button /*finalizarCompra() */ className="btn btn-primary">Comprar</button>
        </div>
    </form>
    )
}

export default Formulario;