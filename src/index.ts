import express, { Request, Response } from 'express';
import 'dotenv/config';
import router from './routes/userRoutes';

export const app = express();
const port = 3000;

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/users', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
