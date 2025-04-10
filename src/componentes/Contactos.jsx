import { useEffect } from "react";
import { useContactos } from "./ContactoContexto";

import ContactCard from "./ContactCard";
import { useNavigate } from "react-router-dom";

export default function Contactos() {
  const { contactos, getContactos } = useContactos();
  const navigate = useNavigate();

  useEffect(() => {
    getContactos();
  }, []);

  return (
    <div className="pagina-contactos">
      <div className="encabezado">
        <h1>📒 Agenda de Contactos</h1>
        <button onClick={() => navigate("/agregar")}>➕ Nuevo contacto</button>
      </div>

      <div className="lista-contactos">
        {contactos.length === 0 ? (
          <p>No hay contactos aún.</p>
        ) : (
          contactos.map((c) => <ContactCard key={c.id} contacto={c} />)
        )}
      </div>
    </div>
  );
}
