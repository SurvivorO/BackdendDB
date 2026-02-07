import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';
import { parse } from 'node:path';


export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.send({users, text: "got all users"})
}

export const getUserById = async (req: Request, res: Response) => { 
  const requestedID = parseInt(req.params.id[0]);
  const user = await prisma.user.findUnique({
    where: {
      id: requestedID
    }
  });

  if (user == null) res.send('user not found');
  else res.send({ user , subText: `user found with id ${requestedID}`})
  
}

export const createUser = async (req: Request, res: Response) => {

  const user = await prisma.user.create({
    data: {
      created: new Date().toISOString(),
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      isPremiumUser: req.body.isPremiumUser === 'true'
    }
  });

  res.send(`created user: ${user}`);
}

export const updateUser = async (req: Request, res: Response) => {

  const user = await prisma.user.update({
    where: {
      id: parseInt(req.params.id[0])
    },
    data: {
      email: req.body.email
    }
  });
  res.send(`updated user with id: ${req.body.id}`);
}

export const deleteUser = async (req: Request, res: Response) => {
  
  const deletedUser = await prisma.user.delete({
    where: {
      id: parseInt(req.params.id[0])
    }
  });
  res.send(`deleted user with id: ${req.params.id}`);
}
