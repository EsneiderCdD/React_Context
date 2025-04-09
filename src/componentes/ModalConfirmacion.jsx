export default function ModalConfirmacion({ mostrar, onConfirmar, onCancelar }) {
    if (!mostrar) return null;
  
    return (
      <div className="modal">
        <p>¿Estás seguro de que deseas eliminar este contacto?</p>
        <button onClick={onConfirmar}>Sí</button>
        <button onClick={onCancelar}>No</button>
      </div>
    );
  }
  