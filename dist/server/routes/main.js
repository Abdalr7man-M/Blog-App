"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
router.get('', (req, res) => {
    console.log(req.method, req.url);
    res.send('Hello World');
    res.end();
});
module.exports = router;
