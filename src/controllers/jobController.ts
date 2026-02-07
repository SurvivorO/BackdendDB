import { Request, Response } from "express";

export const getAllJobs = async (req: Request, res: Response) => { 
    res.send("got all jobs");
}

export const getJobByID = async (req: Request, res: Response) => { 
    res.send("got job by id: ");
}

export const createJob = async (req: Request, res: Response) => { 
    res.send("created Job");
}

export const updateJobByID = async (req: Request, res: Response) => { 
    res.send("updated job by id: ");
}

export const deleteJobByID = async (req: Request, res: Response) => { 
    res.send("deleted job by id: ");
}

