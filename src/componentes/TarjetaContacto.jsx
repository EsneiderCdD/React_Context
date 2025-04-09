export default function TarjetaContacto({ contacto }) {
    return (
      <div>
        <p>Nombre: {contacto.nombre}</p>
        <p>Correo: {contacto.email}</p>
      </div>
    );
  }
  