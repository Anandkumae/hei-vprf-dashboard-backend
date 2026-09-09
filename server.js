const path = require("path");
const express = require("express");
const cors = require("cors");

const institutionsRouter = require("./routes/institutions");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "hei-vprf-api",
    timestamp: new Date().toISOString()
  });
});

app.use("/api/institutions", institutionsRouter);

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});

