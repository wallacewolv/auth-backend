import express from "express";

import {
  login,
  logout,
  signup,
  verifyEmail,
} from "../controllers/auth.controller.js";

export const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.post("/verify-email", verifyEmail);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
