const express = require("express");
const cors = require("cors");
const institutionsRouter = require("./routes/institutions");

const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/**
 * Health check endpoint
 */
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "HEI & VPRF API is running",
    timestamp: new Date().toISOString()
  });
});

/**
 * Mount institution endpoints
 */
app.use("/api/institutions", institutionsRouter);

/**
 * Handle 404 routes
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
