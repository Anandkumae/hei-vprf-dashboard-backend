const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const dataPath = path.join(__dirname, "../data/institutions.json");

function getInstitutions() {
  try {
    const rawData = fs.readFileSync(dataPath, "utf8");
    return JSON.parse(rawData);
  } catch (err) {
    return [];
  }
}

/**
 * GET /api/institutions
 * Fetch all institution records
 */
router.get("/", (req, res) => {
  const institutions = getInstitutions();
  res.json({
    success: true,
    count: institutions.length,
    data: institutions
  });
});

/**
 * GET /api/institutions/:id
 * Fetch a single institution record by ID
 */
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const institutions = getInstitutions();
  const institution = institutions.find((item) => item.id === id);

  if (!institution) {
    return res.status(404).json({
      success: false,
      message: "Institution not found"
    });
  }

  res.json({
    success: true,
    data: institution
  });
});

module.exports = router;
