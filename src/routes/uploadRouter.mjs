import { Router } from "express";
import { createPackage, uploadImagesProduct, uploadProductList } from "../controllers/uploadControllers.mjs";
import { uploadFile } from "../utils/uploadFiles.mjs";

export const router = Router();

router.put('/package', createPackage);

router.put('/setProduct', uploadProductList);

router.put('/image/Products/:id', uploadFile.single('image'), uploadImagesProduct);