import { getProducts } from "../models/getInfoModel.mjs"
import { AppError } from "../services/AppError.mjs"

export const getListProducts = async(request, response, next) =>{
    try {
        const listP = await getProducts();
        response.json({ok: true, message:'Success', list: listP})
    } catch (error) {
        next(error)
    }
}