import { Router } from "express";
import { generateAppointment, getDataPackage, getListAppointments } from "../controllers/appointmentController.mjs";

export const router = Router();

router.put('/generate/appointment', generateAppointment);

router.get('/getList/appointments', getListAppointments)

router.get('/package/data/:packages', getDataPackage)