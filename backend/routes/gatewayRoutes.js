const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "NinjaNix Gateway Root Route" });
});

module.exports = router;
