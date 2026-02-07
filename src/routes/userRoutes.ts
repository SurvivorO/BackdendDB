import { NextFunction, Router, Request, Response } from "express";
import * as userController from '../controllers/userController';

const router = Router();

const timeLogger = (req: Request, res: Response, next: NextFunction) => {
    console.log('Time:', new Date().toISOString());
    console.log('Request URL:', req.originalUrl);
    next();
}

router.use(timeLogger);

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;

//router from userRoute will route all CRUD requests to appropriate controllers that's it