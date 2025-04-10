import { useContactos } from "./ContactoContexto";
import { useNavigate } from "react-router-dom";

export default function ContactCard({ contacto }) {
  const { eliminarContacto } = useContactos();
  const navigate = useNavigate();

  return (
    <div className="contact-card">
      <h3>Nombre: {contacto.name}</h3>

      <p><strong>Correo:</strong> {contacto.email}</p>
      <p><strong>Teléfono:</strong> {contacto.phone}</p>
      <p><strong>Dirección:</strong> {contacto.address}</p>

      <div className="acciones">
        <button onClick={() => navigate(`/crear/${contacto.id}`)}>✏️ Editar</button>
        <button onClick={() => eliminarContacto(contacto.id)}>🗑️ Eliminar</button>
      </div>
    </div>
  );
}
