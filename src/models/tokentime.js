import { Schema, model } from "mongoose";

const TokentimeSchema = new Schema(
  {
    idToken: {
      type: String,
      required: true,
    },
    tiempo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("tokentime", TokentimeSchema);
