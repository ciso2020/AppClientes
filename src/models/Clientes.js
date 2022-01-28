import { Schema, model } from "mongoose";

const ClientesSchema = new Schema(
  {
    cli_codigo_cliente: {
      type: String,
      required: true,
    },
    cli_nombre1: {
      type: String,
      required: true,
    },
    cli_nombre2: {
      type: String,
      required: true,
    },
    cli_apellido1: {
        type: String,
        required: true,
      },
    cli_apellido2: {
        type: String,
        required: true,
      },
    cli_apellido_casada: {
        type: String,
        required: true,
      },
    cli_direccion: {
        type: String,
        required: true,
      },
    cli_telefono1: {
        type: String,
        required: true,
      },
    cli_telefono2: {
        type: String,
        required: true,
      },
    cli_dpi: {
        type: String,
        required: true,
      },
    cli_fecha_nacimiento: {
        type: Date, 
        default: Date.now, 
        required: true,
      },
  
  },
  {
    timestamps: true,
  }
);

export default model("Clientes", ClientesSchema);
