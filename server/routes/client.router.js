const express = require('express');
const path = require('path');
const router = express.Router();

// Serve the HTML page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});


module.exports = router;
