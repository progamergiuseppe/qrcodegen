const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 3000;

// Store IP addresses of blocked users
const blockedIPs = new Set();

app.use(express.json());
app.use(express.static('public'));
app.use(cors({ origin: '*' })); // Allow all origins for Vercel deployments

app.get("/", (req, res) => {
    app.sendFile("")
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});