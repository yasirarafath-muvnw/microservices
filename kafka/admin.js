import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "kafka-service",
    brokers: ["localhost:9094"],
});

const admin = kafka.admin();

const run = async () => {
    await admin.connect();
    await admin.createTopics({
        topics: [
            { topic: "payment-successful" },
            { topic: "order-successful" },
            { topic: "email-successful" },
        ],
    });
};

run();



// i have ceated a folder microservies, inside which i have client.analytics, payment, kafka, email, order services, so...inside kafka admin.js and the.yml file, in other folder i have index.js for producer and consumer, in client i have frontend appication
// microservices/
// │
// ├── client/             # Frontend (Next.js)
// ├── analytics/          # Analytics microservice
// ├── payment/            # Payment microservice
// ├── email/              # Email notification microservice
// ├── order/              # Order processing microservice
// ├── kafka/              # Kafka setup (admin.js, docker-compose.yml)

// Kafka Microservices Gateway Web App Mobile App