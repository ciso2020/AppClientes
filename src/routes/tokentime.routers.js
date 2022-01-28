import { Router } from "express";
import {
  renderToken,
  renderEditForm,
  updateToken,
} from "../controllers/TokenTime.controller";
import { isAuthenticated } from "../helpers/auth";

const router = Router();

// Get All Token
router.get("/TokenTime/allToken", isAuthenticated, renderToken);

// Edit Notes
router.get("/TokenTime/edit/:id", isAuthenticated, renderEditForm);

router.put("/TokenTime/edit-token/:id", isAuthenticated, updateToken);


export default router;
