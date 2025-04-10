import { useState } from "react";
import { useContactos } from "./ContactoContexto";
import { useNavigate } from "react-router-dom";

export default function AgregarContacto() {
  const { crearContacto } = useContactos();
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: ""
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    await crearContacto(formulario);
    navigate("/"); // Volver a la agenda
  };

  return (
    <div className="pagina-agregar">
      <h2>➕ Agregar nuevo contacto</h2>
      <form onSubmit={manejarSubmit} className="formulario-contacto">
        <input
          type="text"
          name="full_name"
          value={formulario.full_name}
          onChange={manejarCambio}
          placeholder="Nombre completo"
          required
        />
        <input
          type="email"
          name="email"
          value={formulario.email}
          onChange={manejarCambio}
          placeholder="Correo electrónico"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formulario.phone}
          onChange={manejarCambio}
          placeholder="Teléfono"
          required
        />
        <input
          type="text"
          name="address"
          value={formulario.address}
          onChange={manejarCambio}
          placeholder="Dirección"
          required
        />
        <button type="submit">Guardar</button>
        <button type="button" onClick={() => navigate("/")}>
          Cancelar
        </button>
      </form>
    </div>
  );
}
