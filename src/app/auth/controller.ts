import { Request, Response} from "express";

export function login(req: Request, res: Response) {
    res.send({token: 4134234234242424243242});
}