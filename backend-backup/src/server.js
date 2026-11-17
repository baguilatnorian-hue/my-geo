const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'My Geo API is running!'
    });
});

app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'My Geo Backend is working!',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`My Geo API running at http://localhost:${PORT}`);
});
