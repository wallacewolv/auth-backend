import dotenv from 'dotenv';
import express from 'express';

import { connectDB } from './db/connect-db.js';
import { authRoutes } from './routes/auth.routes.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send({ status: 'OK'});
});

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connectDB();
  console.log('Server is running on port 3000');
});
