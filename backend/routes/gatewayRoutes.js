const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "NinjaNix Gateway Root Route" });
});

module.exports = router;

const { getService } = require("../utils/serviceRegistry");

router.get("/services", (req, res) => {
    res.json({
        availableServices: Object.keys(require("../config/services")),
    });
});

const { createServiceProxy } = require("../middleware/proxy");

router.use("/userService", createServiceProxy("userService"));
router.use("/orderService", createServiceProxy("orderService"));
router.use("/productService", createServiceProxy("productService"));

