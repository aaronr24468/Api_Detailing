import { Router } from "express";
import { payment_Intent } from "../controllers/stripeController.mjs";


export const router = Router();

router.post('/intentPayment', payment_Intent)