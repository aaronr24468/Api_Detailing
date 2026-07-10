import { Router } from "express";
import {
    generateAppointment,
    getAppointment,
    getDataPackage,
    getListAppointments,
    setExtras
} from "../controllers/appointmentController.mjs";

export const router = Router();

router.put('/generate/appointment', generateAppointment);

router.get('/package/data/:packages', getDataPackage);

router.get('/getList/appointments', getListAppointments);

router.get('/get/appointment/:id', getAppointment);

router.put('/set/extra/:id', setExtras)