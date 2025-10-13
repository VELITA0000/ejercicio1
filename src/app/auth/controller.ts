import { Request, Response} from "express";

export function login(req: Request, res: Response) {
    console.log('Login: ', req.body)
    res.send({token: 4134234234242424243242});
}

export function signup(req: Request, res: Response) {
    console.log(req.body);
    res .send();
}