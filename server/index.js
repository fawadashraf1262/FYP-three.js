import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
// const cors = require('cors');
// const dotenv = require('dotenv');
// const express = require('express');
// import express from 'express';
import { Stripe } from 'stripe';
// const stripe = require('stripe')('sk_test_51NDmVeLn30169p0Q6HuEugYaXUykbaaE73ISSHdly1dECpi58VkbasLPlW5DwL5xjUUg0Wx655BwdU8qgEgFFeX100wFdD2fjw');


import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
const stripe = new Stripe('sk_test_51NDmVeLn30169p0Q6HuEugYaXUykbaaE73ISSHdly1dECpi58VkbasLPlW5DwL5xjUUg0Wx655BwdU8qgEgFFeX100wFdD2fjw');
app.use(cors());
app.use(express.json({ limig: "50mb" }))

app.use("/api/v1/dalle", dalleRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" })
})

// Create a payment session
app.post('/create-payment-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Product Name',
            },
            unit_amount: 1000, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:5173', // Redirect URL after successful payment
      cancel_url: 'https://your-domain.com/cancel', // Redirect URL if payment is canceled
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the payment session.' });
  }
});

// Endpoint to handle Stripe webhook events
app.post('/stripe-webhook', async (req, res) => {
  const event = req.body;

  // Handle the Stripe webhook event (e.g., update database, send confirmation email, etc.)
  // You should implement the appropriate logic here based on the event type

  res.status(200).json({ received: true });
});


app.listen(8080, () => console.log('Server has started on port 8080'))