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

export const insertProduct = async(data) =>{
    const query = `INSERT INTO products(name, description, status)values(?,?,?)`;
    const [res]= await connectionDB.query(query, [data.product_Name, data.description_use, data.status]);
    return(res.insertId);
}

export const setImageProduct = async(id, url) =>{
    const query = `INSERT INTO images_products(product_id, url)values(?,?)`
    const [res] =  await connectionDB.query(query, [id, url])
    return(res.affectedRows === 1)
}