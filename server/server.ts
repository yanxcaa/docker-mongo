import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import exampleRoutes from './modules/infrastructure/example.routes.js';
import healthRoutes from './modules/infrastructure/healthcheck.routes.js';

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(json());
app.use(cors());

// Routes

app.use("/", healthRoutes);
app.use("/example", exampleRoutes);


console.log("Testing live updates!")
app.listen(PORT, () => console.log(`Listening in PORT ${PORT}`));
