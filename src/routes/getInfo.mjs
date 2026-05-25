import { Router } from "express";
import { getListProducts } from "../controllers/getInfoController.mjs";

export const router = Router();

router.get('/list/products', getListProducts)