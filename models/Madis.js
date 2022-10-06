const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    messageContent: {
        type: String,
        required: true,
        maxLength: 25,
    },
    timeOfMessage: {
        type: String,
    },
});

module.exports = mongoose.model('Madis', messageSchema);