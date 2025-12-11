const express = require("express");
const app = express();
require("dotenv").config();

// Middleware to read JSON from requests
app.use(express.json());
const gatewayRoutes = require("./routes/gatewayRoutes");
app.use("/", gatewayRoutes);


// Simple test route
app.get("/", (req, res) => {
    res.send("NinjaNix API Gateway is running! 🚀");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
