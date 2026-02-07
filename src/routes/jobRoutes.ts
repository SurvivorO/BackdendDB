import { NextFunction, Router, Request, Response } from "express";
import * as jobController from '../controllers/jobController';

const jobRouter = Router();

const timeLogger = (req: Request, res: Response, next: NextFunction) => {
    console.log('Time:', new Date().toISOString());
    console.log('Job Request URL:', req.originalUrl);
    next();
}

jobRouter.use(timeLogger);

jobRouter.get('/', jobController.getAllJobs);
jobRouter.get('/:id', jobController.getJobByID);
jobRouter.post('/', jobController.createJob);
jobRouter.put('/:id', jobController.updateJobByID);
jobRouter.delete('/:id', jobController.deleteJobByID);

export default jobRouter;