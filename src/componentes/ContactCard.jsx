import { useState } from "react";
import { useContactos } from "./ContactoContexto";
import ModalConfirmacion from "./ModalConfirmacion";

export default function ContactCard({ contacto }) {
  const { eliminarContacto, editarContacto } = useContactos();
  const [modoEdicion, setModoEdicion] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [formulario, setFormulario] = useState({ ...contacto });

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleGuardar = async () => {
    await editarContacto(contacto.id, formulario);
    setModoEdicion(false);
  };

  const confirmarEliminacion = () => {
    eliminarContacto(contacto.id);
    setMostrarModal(false);
  };

  return (
    <div className="contact-card">
      {modoEdicion ? (
        <>
          <input name="name" value={formulario.name} onChange={handleChange} />
          <input name="email" value={formulario.email} onChange={handleChange} />
          <input name="phone" value={formulario.phone} onChange={handleChange} />
          <input name="address" value={formulario.address} onChange={handleChange} />
          <div className="acciones">
            <button onClick={handleGuardar}>💾 Guardar</button>
            <button onClick={() => setModoEdicion(false)}>❌ Cancelar</button>
          </div>
        </>
      ) : (
        <>
          <h3>Nombre: {contacto.name}</h3>
          <p><strong>Correo:</strong> {contacto.email}</p>
          <p><strong>Teléfono:</strong> {contacto.phone}</p>
          <p><strong>Dirección:</strong> {contacto.address}</p>

          <div className="acciones">
            <button onClick={() => setModoEdicion(true)}>✏️ Editar</button>
            <button onClick={() => setMostrarModal(true)}>🗑️ Eliminar</button>
          </div>
        </>
      )}

      {/* Modal de confirmación */}
      <ModalConfirmacion
        mostrar={mostrarModal}
        onConfirmar={confirmarEliminacion}
        onCancelar={() => setMostrarModal(false)}
      />
    </div>
  );
}
