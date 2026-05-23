import multer from "multer";

export const uploadFile = multer({
    storage: multer.memoryStorage(),
    limits: {fieldSize: 5 * 1024 * 1024}, //5mb
    fileFilter: (req, file, cb) =>{
        if(file.mimetype.startsWith('image/')){
            return cb(new Error('Solo imagenes'), false)
        }
        cb(null, true)
    }
})