// para un proyecto extenso crear un mapa de extensiones validas, se puede hacer a base de los endpoints, que tengan filtros
// como funcion flecha, el middleware no sera la funcion sino la que esta dentro de la otra funcion, esto se le llama closure
// dependiendo del endpoints el middleware sera un closure que retorna una funcion que recibe un parametro especifico

import multer, { Multer, diskStorage } from "multer";

const storage = diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads'); // este middleware si deja pasar pero manda un error
    },
    filename: (req, file, callback) => {
        const name = new Date().getTime().toString();
        callback(null, `${name}.jpg`);
    }
});

export const uploadMiddleware = multer({
    storage
});