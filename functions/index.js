const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51LbpjHHwS3wvuNiRaUvE20tlPRqnkdoDiTLZ74A7vqhdJgiyzVlf82R7MG4nFEz9jH7zwNnAjL8fmN3sazjUBHIK00a4VDLM6T"
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
	const total = req.query.total;

	console.log("Payment Request Recieved for this amount >>> ", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of the currency
		currency: "usd",
	});

	// OK - Created
	res.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// - Listen command
exports.api = functions.https.onRequest(app);