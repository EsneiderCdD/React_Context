import { createContext, useContext, useState } from "react";

// Crear el contexto
const ContactoContexto = createContext();

// Exportar el hook
export const useContactos = () => useContext(ContactoContexto);

// Proveedor del contexto
export const ProveedorContacto = ({ children }) => {
  const [contactos, setContactos] = useState([]);

  const AGENDA_SLUG = "Esneider"; // Usa el slug exactamente como lo creaste

  // Obtener todos los contactos
  const getContactos = async () => {
    try {
      const res = await fetch(`https://playground.4geeks.com/contact/agendas/${AGENDA_SLUG}/contacts`);
      const data = await res.json();
      setContactos(data.contacts || []);
    } catch (error) {
      console.error("Error al obtener contactos:", error);
    }
  };

  const crearContacto = async (contacto) => {
    try {
      const res = await fetch(`https://playground.4geeks.com/contact/agendas/${AGENDA_SLUG}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...contacto, agenda_slug: AGENDA_SLUG }),
      });
      if (res.ok) {
        getContactos();
      }
    } catch (error) {
      console.error("Error al crear contacto:", error);
    }
  };

  const editarContacto = async (id, datosActualizados) => {
    try {
      const res = await fetch(`https://playground.4geeks.com/contact/agendas/${AGENDA_SLUG}/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...datosActualizados, agenda_slug: AGENDA_SLUG }),
      });
      if (res.ok) {
        getContactos();
      }
    } catch (error) {
      console.error("Error al editar contacto:", error);
    }
  };

  const eliminarContacto = async (id) => {
    try {
      const res = await fetch(`https://playground.4geeks.com/contact/agendas/${AGENDA_SLUG}/contacts/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setContactos((prev) => prev.filter((c) => c.id !== id));
      }
    } catch (error) {
      console.error("Error al eliminar contacto:", error);
    }
  };

  return (
    <ContactoContexto.Provider
      value={{
        contactos,
        getContactos,
        crearContacto,
        editarContacto,
        eliminarContacto,
      }}
    >
      {children}
    </ContactoContexto.Provider>
  );
};
