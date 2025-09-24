import { Router } from "express";
import { getUsers } from "./controller";
import { authMiddleware } from '../middlewares/auth';

const router = Router ();

// se puede documentar con un archivo config.yml
/** 
 * @swagger
 * /users:
 *  get:
 *    tags: [users]
 *    description: listar usuarios
 *    parameters:
 *      - in: query
 *        name: token
 *        description: auth user token
 *        schema:
 *         type: string
 *    responses: 
 *      200:
 *        description: success
 *      401:
 *        description: missing token
*/
router.get('/', authMiddleware, getUsers)

export default router;