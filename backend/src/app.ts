import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import { buildingRoutes } from './routes/building';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/building', buildingRoutes);

app.use((req, res) => {
  res.send('home');
});

app.listen(4000);
