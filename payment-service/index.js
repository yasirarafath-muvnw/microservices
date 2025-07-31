import express from "express";
import cors from "cors";
import { Kafka } from "kafkajs";

const app = express();

app.use(
    cors({
        origin: "http://localhost:4000",
    })
);
app.use(express.json());


const kafka = new Kafka({
    clientId: "payment-service",
    brokers: ["localhost:9094"],
});

const producer = kafka.producer();

const connectToKafka = async () => {
    try {
        await producer.connect();
        console.log("Producer connected!");
    } catch (err) {
        console.log("Error connecting to Kafka", err);
    }
};


app.post('/payment-service', async (req, res) => {


    console.log('API ENDPOINT HIT');


    const { cart } = req.body;

    // ASSUMING THAT WE GET THE USER AND DECRYPT

    const userId = '99 99 99';

    // TODO: PAYMENT

    // KAFKA
    await producer.send({
        topic: "payment-successful",
        messages: [{ value: JSON.stringify({ userId, cart }) }],
    });
    

    return res.status(200).send("PAyment Successfull.")
})


app.listen(8000, () => {
    connectToKafka();
    console.log('app running on port 8000');
});

app.use((err, req, res, next) => {
    res.status(500 || err.status).send({ error: "Something went wrong!" });
});