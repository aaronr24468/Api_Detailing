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