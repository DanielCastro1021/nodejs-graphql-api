import express from 'express';
import path from 'path';

const router = express.Router();

// Serve the HTML page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../static/index.html'));
});

export default router;
