const express = require('express');
const router = express.Router();
const logsController = require("../controllers/logsController");

router.post('/create', logsController.create);

module.exports = router