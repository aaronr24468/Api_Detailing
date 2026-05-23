import { getPackageData, setAppointment } from "../models/appointmentModel.mjs";
import { AppError } from "../services/AppError.mjs";


export const generateAppointment = async (request, response, next) => {
    try {
        const data = {
            name: request.body.name,
            lastname: request.body.lastname,
            address: request.body.address,
            number: request.body.number,
            package: request.body.package,
            dateSelection: request.body.dateSelection,
            hour: request.body.hour,
            pricePackage: request.body.pricePackage,
            carSize: request.body.carSize,
            appointment: 'Appointment'
        }

        if (!data.name ||
            !data.lastname ||
            !data.address ||
            !data.number ||
            !data.package ||
            !data.dateSelection ||
            !data.hour ||
            !data.pricePackage ||
            !data.carSize
        ) {
            console.log("falta")
            throw new AppError("Faltan datos", 400)
        }

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