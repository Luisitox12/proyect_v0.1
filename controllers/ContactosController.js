const ContactosModel = require("../models/ContactosModel");

const successMensaje = document.getElementById("successMensaje");
const errorMensaje = document.getElementById("errorMensaje");

class ContactosController {
  constructor() {
    this.contactosModel = new ContactosModel();
    this.add = this.add.bind(this);
  }

  async add(req, res) {
    // Validar los datos del formulario

    const { email, name, mensaje } = req.body;

    if (!email || !name || !mensaje) {
      errorMensaje.style.display = "block";
      return;
    }

    // Guardar los datos del formulario
    const ip = req.ip;
    const fecha = new Date().toISOString();

   
    await this.contactosModel.crearContacto(email, name, mensaje, ip, fecha);

    const contactos = await this.contactosModel.obtenerAllContactos();

    console.log(contactos);

  }
}

module.exports = ContactosController;