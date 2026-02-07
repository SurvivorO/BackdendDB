import { Request, Response } from 'express';
import { app } from '..';

//todo: turn them to separate functions

export const getAllUsers = async (req: Request, res: Response) => { 
  res.send('got all users');
}

export const getUserById = async (req: Request, res: Response) => { 
  res.send('got User with id:');
}

export const createUser = async (req: Request, res: Response) => {
  res.send('created new user');
}

export const updateUser = async (req: Request, res: Response) => {
  res.send('updated user with id:');
}

export const deleteUser = async (req: Request, res: Response) => {
  res.send('deleted user with id:');
}
