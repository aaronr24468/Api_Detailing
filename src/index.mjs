import express from "express";
import {createServer} from 'http'
import cors from 'cors';
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { schedule } from "node-cron";
import { config } from "dotenv";
config();

import { router as appointmentRouter } from "./routes/appointmentRouter.mjs";
import { router as stripeRouter } from "./routes/stripeRouter.mjs";
import { router as uploadRouter } from "./routes/uploadRouter.mjs";
import { router as getInfo } from "./routes/getInfo.mjs";
import { errHandler } from "./middlewares/errorHandler.mjs";
import { updateStatusAppointments } from "./controllers/appointmentController.mjs";

const port = process.env.PORT;

const app = express();
const server = createServer(app);

app.use(morgan('dev'));
app.use(cors());
app.use(cookieParser());
app.use(express.json());

schedule("0 0 * * *", async () =>{ //realizamos actualizacion de status a las 12 de la noche por si alguien no quiso o por si se me olvido cancelar
    updateStatusAppointments();
    console.log("Se actualizo status de citas a expiradas")
});

// schedule("*/1 * * * *", async () =>{
//     updateStatusAppointments();
//     console.log("Se actualizo status de citas a expiradas")
// });

app.use('/appointment', appointmentRouter);
app.use('/stripe', stripeRouter);
app.use('/upload', uploadRouter);
app.use('/get', getInfo);

app.use(errHandler);

server.listen(port, () =>{
    console.log(`Listening to the http://192.168.1.82:${port}`) 
})

// server.listen(8181, () =>{
//     console.log('Listening to the http://localhost:8181')
// })