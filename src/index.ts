import express, { Request, Response } from 'express';
import 'dotenv/config';

const app = express();
const port = 3000;

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/users', async (req: Request, res: Response) => { 
  res.send('got all users');
});

app.get('/users/:id', async (req: Request, res: Response) => {
  res.send('got User with id:');
});

app.post('/users', async (req: Request, res: Response) => { 
  res.send('created new user');
});

app.put('/users/:id', async (req: Request, res: Response) => {
  res.send('updated user with id:');
});

app.delete('/users/:id', async (req: Request, res: Response) => {
  res.send('deleted user with id:');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
