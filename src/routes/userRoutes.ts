import { NextFunction, Router, Request, Response } from "express";
import * as userController from '../controllers/userController';

const userRouter = Router();

const timeLogger = (req: Request, res: Response, next: NextFunction) => {
    console.log('Time:', new Date().toISOString());
    console.log('User Request URL:', req.originalUrl);
    next();
}

userRouter.use(timeLogger);

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.post('/', userController.createUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

export default userRouter;

//router from userRoute will route all CRUD requests to appropriate controllers that's it