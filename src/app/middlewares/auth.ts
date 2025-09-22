import { Request, Response, NextFunction } from 'express'
import { IUser } from '../interfaces/user';

declare global { 
    namespace Express {
        interface Request {
            user?: IUser; // puede haber un usuario
        }
    }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    // parametros: body /users/, ruta /posts/postsid?value=true, query ?
    const { token } = req.query;
    if (token === '12345') {
        req.user = {
            id: 123,
            name: 'Velita',
            email: 'velita@gmail.com'
        }
        next();
    } else {
        res.status(401).send({ message: 'not logged in'});
        // res.status(401).send();
        // res.sendStatus(401);
    }
}