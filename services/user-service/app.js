const express = require("express");
const app = express();

app.use(express.json());

app.get("/users/:id", (req, res) => {
    res.json({
        service: "user-service",
        userId: req.params.id,
        message: "Response coming from user-service",
    });
});

const PORT = 6001;
app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});
