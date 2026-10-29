const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongodb:27017";

app.use(express.json());

let database;

app.get("/", (req, res) => {
res.json({ message: "Backend is running!" });
});

app.get("/api/message", (req, res) => {
res.json({
message: "Hello from Node.js backend!",
student: "Vanshika Jain",
college: "Gujarat University",
course: "MSc IT Cloud and Application Development"
});
});

app.get("/api/health", (req, res) => {
res.json({
status: "OK",
database: database ? "Connected" : "Not connected"
});
});

async function startServer() {
try {
const client = new MongoClient(MONGO_URL, {
serverSelectionTimeoutMS: 5000
});


await client.connect();
database = client.db("portfolio");

console.log("MongoDB connected successfully");

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});


} catch (error) {
console.error("Startup error:", error.message);
process.exit(1);
}
}

startServer();
