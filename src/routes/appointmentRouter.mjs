import { Router } from "express";
import { generateAppointment, getDataPackage } from "../controllers/appointmentController.mjs";

export const router = Router();

router.put('/generate/appointment', generateAppointment);

router.get('/package/data/:packages', getDataPackage)