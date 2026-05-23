import { Router } from "express";
import { createPackage } from "../controllers/uploadControllers.mjs";
import { uploadFile } from "../utils/uploadFiles.mjs";

export const router = Router();

router.put('/package', createPackage);