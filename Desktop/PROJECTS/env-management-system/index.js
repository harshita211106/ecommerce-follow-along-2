require('dotenv').config(); // Load environment variables

const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;

app.get('/', (req, res) => {
    res.send(`Your API Key is: ${API_KEY}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
