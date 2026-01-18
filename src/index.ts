import express, { Request, Response } from 'express';
import 'dotenv/config';

const app = express();
const port = 3000;

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!');
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
