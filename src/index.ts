import express, { Request, Response } from 'express';
import 'dotenv/config';
import userRouter from './routes/userRoutes';
import jobRouter from './routes/jobRoutes';

export const app = express();
const port = 3000;

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/users', userRouter);
app.use('/jobs', jobRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
