require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Authentication routes
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "My Geo API is running!"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`My Geo server running on port ${PORT}`);
});