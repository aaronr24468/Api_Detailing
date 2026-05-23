import { connectionDB } from "../connectionDB/connectionDB.mjs";

export const setAppointment = async (data) => {
    const query = `INSERT INTO appointments(
    name, 
    lastname, 
    address, 
    number, 
    package, 
    date_Selection, 
    hour, 
    pricePackage, 
    carSize,
    service_Status
    )
    values(?,?,?,?,?,?,?,?,?,?)`;

    const [result] = await connectionDB.query(query, [
        data.name,
        data.lastname,
        data.address,
        data.number,
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