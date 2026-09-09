const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const DATA_FILE = path.join(__dirname, "../data/institutions.json");

function loadInstitutions() {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to read institutions dataset:", err.message);
    return [];
  }
}

router.get("/", (req, res) => {
  const data = loadInstitutions();
  res.json({
    success: true,
    count: data.length,
    data
  });
});

router.get("/:id", (req, res) => {
  const targetId = parseInt(req.params.id, 10);
  const records = loadInstitutions();
  const match = records.find((item) => item.id === targetId);

  if (!match) {
    return res.status(404).json({
      success: false,
      message: `Institution #${req.params.id} not found`
    });
  }

  res.json({
    success: true,
    data: match
  });
});

module.exports = router;

