import { getListA, getPackageData, setAppointment } from "../models/appointmentModel.mjs";
import { AppError } from "../services/AppError.mjs";


export const generateAppointment = async (request, response, next) => {
    try {
        const data = {
            name: request.body.name,
            address: request.body.address,
            phone: request.body.phone,
            package: request.body.packages,
            dateSelection: request.body.date,
            hour: request.body.time,
            pricePackage: request.body.price,
            carSize: request.body.size,
            appointment: 'Appointment'
        }

        console.log(data)

        if (!data.name ||
            !data.address ||
            !data.phone ||
            !data.package ||
            !data.dateSelection ||
            !data.hour ||
            !data.pricePackage ||
            !data.carSize
        ) {
            console.log("falta")
            throw new AppError("Faltan datos", 400)
        }

        console.log(data)

        const result = await setAppointment(data);

        if (result.affectedRows === 0) throw new AppError('Error al registrar servicio', 401);

        response.json({ ok: true, message: 'Se realizo registro con exito' })
    } catch (error) {
        next(error)
    }
}

export const getDataPackage = async (request, response, next) => {
    try {
        const packageParams = request.params.packages;
        const data = await getPackageData(packageParams);
        const info = data[0]
        const arrDescription = info.description_Package.split('.');
        arrDescription.pop();
        info.description_Package = arrDescription
        response.json({ok: true, message: 'Success', data: info})

    } catch (error) {
       next(error)
    }
}

export const getListAppointments = async(request, response, next) =>{
    try {
        const data = await getListA();
        response.json({ok: true, message: 'Success', list: data})
    } catch (error) {
        next(error)
    }
}