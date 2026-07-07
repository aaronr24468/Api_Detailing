import { request, response } from "express";
import { insertProduct, setImageProduct, uploadPackage } from "../models/uploadModel.mjs";
import { AppError } from "../services/AppError.mjs";
import cloudinary from '../utils/cloudinary.mjs'

export const createPackage = async (request, response, next) => {
    try {
        const data = {
            package_Name: request.body.package_Name,
            description_Package: request.body.description_Package,
            price_CH: request.body.price_CH,
            price_L: request.body.price_L,
            washing_Time: request.body.washing_Time
        }

        const result = await uploadPackage(data);

        if (!result) throw new AppError('Error al crear paquete', 403);

        response.json({ ok: true, message: 'Package created' })
    } catch (error) {
        next(error)
    }
}

export const uploadProductList = async(request, response, next) => {
    try {
        const data = {
            product_Name: request.body.product_Name,
            description_use: request.body.description_Package,
            status: 'available'
        } 

        const id_Product = await insertProduct(data)

        response.json({ok:true, message:'Success', id: id_Product})
    } catch (error) {
        next(error)
    }
}

export const uploadImagesProduct = async(request, response, next) => {
    try {
        const id = request.params.id;

        const result = await new Promise((resolve, reject) => {
            cloudinary.v2.uploader.upload_stream({
                folder: 'Detailing_Products',
                overwrite: true,
                public_id: `detailing_${id}`
            },
                (err, result) => {
                    if (err) reject(err)
                    else resolve(result)
                }
            ).end(request.file.buffer)
        })

        const url = result.secure_url

        const res = await setImageProduct(id, url)

        if (!res) throw new AppError('Error al guardar la imagen', 403);

        response.json({ ok: true, message: "Success" })
    } catch (error) {
        next(error)
    }
}
