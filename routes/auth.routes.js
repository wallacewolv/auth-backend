import express from "express";

import { login, logout, signup } from "../controllers/auth.controller.js";

export const authRoutes = express.Router();

authRoutes.get("/signup", signup);
authRoutes.get("/login", login);
authRoutes.get("/logout", logout);
