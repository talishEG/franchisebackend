const Log = require('../models/logModel');

class LogController {
    async create(req, res) {
        const { message } = req.body;
        try {
            const newLog = await Log.create({ message });
            return res.status(201).json({status:'success' ,message: 'Log Created successfully', log: newLog });
        } catch (error) {
            return res.status(500).json({ message: 'Error creating log', error: error.message });
        }
    }
}

module.exports = new LogController();
