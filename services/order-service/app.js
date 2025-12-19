const express = require("express");
const app = express();

app.use(express.json());

app.get("/orders/:id", (req, res) => {
    res.json({
        service: "order-service",
        orderId: req.params.id,
        message: "Response coming from order-service",
    });
});

const PORT = 6002;
app.listen(PORT, () => {
    console.log(`Order service running on port ${PORT}`);
});
