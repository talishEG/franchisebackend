const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const logRoutes = require('./logRoutes');

router.use('/user', userRoutes);
router.use('/log', logRoutes);

module.exports = router;
