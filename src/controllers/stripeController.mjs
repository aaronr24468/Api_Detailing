import Stripe from "stripe";
import { config } from "dotenv";
import { AppError } from "../services/AppError.mjs";
config();

// const stripe = new Stripe(process.env.STRIPE_SK);

// export const payment_Intent = async (request, response, next) => {
//     try {
//         const dataPayment = {
//             id_package: request.body.id_package,
//             price: request.body.price,
//             paymentIntentId: ''
//         }

//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: 100000,
//             currency: 'mxn',
//             metadata: {
//                 id_package: dataPayment.id_package
//             }
//         })

//         console.log(paymentIntent.client_secret)
//         console.log(paymentIntent.id)
//         dataPayment.paymentIntentId = paymentIntent.id;

//         response.json({ok: true, message: 'Success', clientSecret: paymentIntent.client_secret});

//     } catch (error) {
//         next(error)
//     }
// }