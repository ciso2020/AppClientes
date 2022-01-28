import Note from "../models/Note";
import Clientes from "../models/Clientes";

export const renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};

export const createNewNote = async (req, res) => {
  
  const { cli_codigo_cliente,
    cli_nombre1,
    cli_nombre2,
    cli_apellido1,
    cli_apellido2,
    cli_apellido_casada,
    cli_direccion,
    cli_telefono1,
    cli_telefono2,
    cli_dpi,
    cli_fecha_nacimiento } = req.body;
  const errors = [];
  if (!cli_codigo_cliente) {
    errors.push({ text: "Por favor ingrese codigo de cliente" });
  }
  if (!cli_nombre1) {
    errors.push({ text: "Por favor ingrese nombre1 de cliente" });
  }
  if (!cli_nombre2) {
    errors.push({ text: "Por favor ingrese nombre2 de cliente" });
  }
  if (!cli_apellido1) {
    errors.push({ text: "Por favor ingrese apellido1 de cliente" });
  }
  if (!cli_apellido2) {
    errors.push({ text: "Por favor ingrese apellido2 de cliente" });
  }
  if (!cli_apellido_casada) {
    errors.push({ text: "Por favor ingrese apellido de casada " });
  }
  if (!cli_direccion) {
    errors.push({ text: "Por favor ingrese direccion de cliente" });
  }
  if (!cli_telefono1) {
    errors.push({ text: "Por favor ingrese telefono1 de cliente" });
  }
  if (!cli_telefono2) {
    errors.push({ text: "Por favor ingrese telefono2 de cliente" });
  }
  if (!cli_dpi) {
    errors.push({ text: "Por favor ingrese dpi de cliente" });
  }
  if (!cli_fecha_nacimiento) {
    errors.push({ text: "Por favor ingrese fecha de nacimiento de cliente" });
  }
  if (errors.length > 0) {
    res.render("notes/new-note", {
      errors,
      cli_codigo_cliente,
      cli_nombre1,
      cli_nombre2,
      cli_apellido1,
      cli_apellido2,
      cli_apellido_casada,
      cli_direccion,
      cli_telefono1,
      cli_telefono2,
      cli_dpi,
      cli_fecha_nacimiento,
    });
  } else {
    const clienteFound = await Clientes.findOne({ cli_codigo_cliente: cli_codigo_cliente });
    if (!clienteFound) {
      const newNote = new Clientes({ cli_codigo_cliente,
      cli_nombre1,
      cli_nombre2,
      cli_apellido1,
      cli_apellido2,
      cli_apellido_casada,
      cli_direccion,
      cli_telefono1,
      cli_telefono2,
      cli_dpi,
      cli_fecha_nacimiento });
      //newNote.user = req.user.id;
      await newNote.save();
      req.flash("success_msg", "Cliente agregado satisfactoriamente...");
      res.redirect("/notes");
      }
      else {
        req.flash("error_msg", "Codigo de cliente existe...");
        res.redirect("/notes");
      };
  };
};

export const renderNotes = async (req, res) => {
  const notes = await Clientes.find()
    .sort({ date: "desc" })
    .lean();
  res.render("notes/all-notes", { notes });
};

export const renderEditForm = async (req, res) => {
  const note = await Clientes.findById(req.params.id).lean();
  res.render("notes/edit-note", { note });
};

export const updateNote = async (req, res) => {
  const { cli_codigo_cliente,
    cli_nombre1,
    cli_nombre2,
    cli_apellido1,
    cli_apellido2,
    cli_apellido_casada,
    cli_direccion,
    cli_telefono1,
    cli_telefono2,
    cli_dpi,
    cli_fecha_nacimiento  } = req.body;
  await Clientes.findByIdAndUpdate(req.params.id, { cli_codigo_cliente,
    cli_nombre1,
    cli_nombre2,
    cli_apellido1,
    cli_apellido2,
    cli_apellido_casada,
    cli_direccion,
    cli_telefono1,
    cli_telefono2,
    cli_dpi,
    cli_fecha_nacimiento  });
  req.flash("success_msg", "Cliente modificado Satisfactoriamente");
  res.redirect("/notes");
};

export const deleteNote = async (req, res) => {
  await Clientes.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Cliente eliminado Satisfactoriamente");
  res.redirect("/notes");
};
