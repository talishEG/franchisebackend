const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    message: {
    type: String,
    required: true,
    maxlength: 1024,
  }
}, {
    timestamps: true,
});


const Log = mongoose.model('Log', logSchema);

module.exports = Log;
