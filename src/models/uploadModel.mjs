import { connectionDB } from "../connectionDB/connectionDB.mjs";

export const uploadPackage = async(data) => {
    const query = `INSERT INTO packages(
    package_Name, 
    description_Package, 
    price_CH, 
    price_L,
    washing_Time
    )
    values(?,?,?,?,?)`;

    const [result] = await connectionDB.query(query,
        [
            data.package_Name,
            data.description_Package,
            data.price_CH,
            data.price_L,
            data.washing_Time
        ]
    )

    return(result.affectedRows === 1)
}