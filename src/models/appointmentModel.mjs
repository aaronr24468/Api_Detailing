import e from "express";
import { connectionDB } from "../connectionDB/connectionDB.mjs";

export const setAppointment = async (data) => {
    const query = `INSERT INTO appointments(
    full_name, 
    address, 
    phone, 
    package, 
    date_Selection, 
    hour, 
    pricePackage, 
    carSize,
    service_Status
    )
    values(?,?,?,?,?,?,?,?,?)`;

    const [result] = await connectionDB.query(query, [
        data.name,
        data.address,
        data.phone,
        data.package,
        data.dateSelection,
        data.hour,
        data.pricePackage,
        data.carSize,
        data.appointment
    ]);

    return(result)
}

export const getPackageData = async(params) =>{
    const query = `SELECT * FROM packages WHERE package_Name=?`;
    const [pack] = await connectionDB.query(query, [params]);
    return(pack)
}

export const getListA = async() =>{
    const query =  `SELECT *, MONTH(date_Selection), DAY(date_Selection) FROM appointments ORDER BY MONTH(date_Selection) asc, DAY(date_Selection) asc`;
    const [list] = await connectionDB.query(query);
    return(list)
}

export const getAppoint = async(id) =>{
    const query = 'SELECT * FROM appointments WHERE id=?';
    const [appointment] = await connectionDB.query(query, [id]);
    return(appointment);
}

export const getIdExpiredAppointments = async() =>{
    const query = 'SELECT id FROM appointments a WHERE TIMESTAMP(a.date_Selection) < now() and a.service_Status=?';
    const [idAppointments] = await connectionDB.query(query, ['Appointment']);
    return(idAppointments)
}

export const changeStatusAppointment = async(id) =>{
    const query = 'UPDATE appointments set service_Status=? WHERE id=?';
    await connectionDB.query(query, ['Expired', id])
}

export const setExtraData = async(extra, id) =>{
    const query = 'INSERT INTO extras(id_appointment, extra)values(?,?)';
    const [extraRes] = await connectionDB.query(query, [id, extra])
}

export const getExtras = async(id) =>{
    const query = 'SELECT * FROM extras WHERE id_appointment=?';
    const [extras] = await connectionDB.query(query, [id]);
    return(extras)
}