import { Routes, Route } from "react-router-dom";
import { ProveedorContacto } from "./componentes/ContactoContexto";
import Contactos from "./componentes/Contactos";
import AgregarContacto from "./componentes/AgregarContacto";

function App() {
  return (
    <ProveedorContacto>
    
        <Routes>
          <Route path="/" element={<Contactos />} />
          <Route path="/agregar" element={<AgregarContacto />} />
        </Routes>
     
    </ProveedorContacto>
  );
}

export default App;
