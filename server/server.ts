import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import exampleRoutes from './modules/infrastructure/example.routes.js';

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(json());
app.use(cors());

// Routes

app.use("/example", exampleRoutes);


app.listen(PORT, () => console.log(`Listening in PORT ${PORT}`));
