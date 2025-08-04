i have ceated a folder microservies, inside which i have client (folder), analytics (folder), payment (folder), kafka (folder), email (folder), order services (folder), so...inside kafka (folder) i have admin.js and the docker-compose.yml file, other (folders) i have index.js for producer and consumer code, in client i have frontend appication.
microservices/
│
├── client/             # Frontend (Next.js)
├── analytics/          # Analytics microservice
├── payment/            # Payment microservice
├── email/              # Email notification microservice
├── order/              # Order processing microservice
├── kafka/              # Kafka setup (admin.js, docker-compose.yml)

Kafka Microservices Gateway Web App Mobile App

Navigate to each folder and run, 
npm i, 
node --watch index.js 
kafka run (docker compose up)
client (npx next dev -p 4000)


once i run the endpoint from client in the backend payment-service 
