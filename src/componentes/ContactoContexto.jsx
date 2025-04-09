import { createContext, useContext, useState } from "react";

const ContactoContexto = createContext();

export const useContactos = () => useContext(ContactoContexto);

export const ProveedorContacto = ({ children }) => {
  const [contactos, setContactos] = useState([]);

  return (
    <ContactoContexto.Provider value={{ contactos, setContactos }}>
      {children}
    </ContactoContexto.Provider>
  );
};
