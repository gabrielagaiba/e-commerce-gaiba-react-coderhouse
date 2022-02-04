import { useConsumirContexto } from "../../CartContext";

const ModalDatos = ({onClose}) => {

    const { compra } = useConsumirContexto();

    return (
      <div className="modal fade" id="modalDatos" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalDatosLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalDatosLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              {compra ? 
                <div>Su compra fue registrada con exito! Orden de compra: {compra}</div> 
                : 
                <div>Spinner</div>}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ModalDatos;