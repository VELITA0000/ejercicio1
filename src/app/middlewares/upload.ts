// para un proyecto extenso crear un mapa de extensiones validas, se puede hacer a base de los endpoints, que tengan filtros
// como funcion flecha, el middleware no sera la funcion sino la que esta dentro de la otra funcion, esto se le llama closure
// dependiendo del endpoints el middleware sera un closure que retorna una funcion que recibe un parametro especifico
import { Request } from "express";
import multer, { diskStorage, FileFilterCallback, Multer } from "multer";

const validExtensions = ['jpg', 'png', 'jpeg']

const storage = diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads'); // este middleware si deja pasar pero manda un error
    },
    filename: (req, file, callback) => {
        const name = new Date().getTime().toString();
        const extension = file.originalname.split('.').pop(); // pop saca el ultimo elemento de la funcion split
        callback(null, `${name}.${extension}`);
    }                       
});

const filters = (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
    const extension = file.originalname.split('.').pop();
    const acceptFile = validExtensions.includes(extension?.toLocaleLowerCase()!); 
    // ° Aceptar cualquier formato de archivo
    // const acceptFile = file.mimetype.startWith('image/)
    // callback(null, acceptFile)
    callback(null, acceptFile);
}

export const uploadMiddleware = multer({
    storage
});