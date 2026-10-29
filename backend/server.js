const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongodb:27017";
const client = new MongoClient(MONGO_URL);

app.use(express.json());

app.get("/", (req, res) => {
res.json({
message: "Backend is running successfully!",
student: "Vanshika Jain",
course: "MSc IT - Cloud and Application Development",
university: "Gujarat University"
});
});

app.get("/api/message", (req, res) => {
res.json({
message: "Hello from Node.js backend!",
student: "Vanshika Jain"
});
});

app.get("/api/health", (req, res) => {
res.json({ status: "OK" });
});

async function startServer() {
try {
await client.connect();
console.log("Connected to MongoDB");

```
    app.locals.db = client.db("portfolio");

    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Backend running on port ${PORT}`);
    });
} catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
}
```

}

startServer();
