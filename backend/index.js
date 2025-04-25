//packages
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

//utiles
import connetDB from './config/db.js';
import userRoutes from './routers/userRoutes.js';

//config
dotenv.config();
const port = process.env.PORT || 5000;

connetDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.post('/', (req, res) => {
//   res.send('Hello');
// });

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
