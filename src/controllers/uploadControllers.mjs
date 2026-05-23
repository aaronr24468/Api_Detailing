import { uploadPackage } from "../models/uploadModel.mjs";
import { AppError } from "../services/AppError.mjs";

export const createPackage = async(request, response, next) =>{
    try {
        const data ={
            package_Name: request.body.package_Name,
            description_Package: request.body.description_Package,
            price_CH: request.body.price_CH,
            price_L: request.body.price_L,
            washing_Time: request.body.washing_Time
        }

        const result = await uploadPackage(data);

        if(!result) throw new AppError('Error al crear paquete', 403);

        response.json({ok: true, message: 'Package created'})
    } catch (error) {
        next(error)
    }
}