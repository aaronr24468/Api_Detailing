import { connectionDB } from "../connectionDB/connectionDB.mjs";

export const getProducts = async() =>{
    const query = `SELECT p.id, p.name, p.description, p.status, i.url FROM products p INNER JOIN images_products i ON p.id = i.product_id where p.status=?`;
    const [list] = await connectionDB.query(query, ['available']);
    return(list)
}