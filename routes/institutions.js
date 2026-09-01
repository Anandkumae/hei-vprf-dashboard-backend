const express = require("express");
const router = express.Router();
const institutions = require("../data/institutions.json");

/**
 * GET /api/institutions
 * Fetch all institution records
 */
router.get("/", (req, res) => {
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
