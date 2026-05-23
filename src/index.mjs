import express from "express";
import {createServer} from 'http'
import cors from 'cors';
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
config();

import { router as appointmentRouter } from "./routes/appointmentRouter.mjs";
import { router as stripeRouter } from "./routes/stripeRouter.mjs";
import { router as uploadRouter } from "./routes/uploadRouter.mjs";
import { errHandler } from "./middlewares/errorHandler.mjs";

const port = process.env.PORT;

const app = express();
const server = createServer(app);

app.use(morgan('dev'));
app.use(cors());
app.use(cookieParser());

app.use(express.json());

app.use('/v1', appointmentRouter);
app.use('/stripe', stripeRouter);
app.use('/upload', uploadRouter)

app.use(errHandler);

server.listen(port, () =>{
    console.log(`Listening to the http://localhost:${port}`)
})