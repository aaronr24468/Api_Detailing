import { connectionDB } from "../connectionDB/connectionDB.mjs";

export const getProducts = async() =>{
    const query = `SELECT p.id, p.name, p.description, i.url FROM products p INNER JOIN images_products i ON p.id = i.product_id`;
    const [list] = await connectionDB.query(query);
    return(list)
}