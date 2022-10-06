const Kalle = require('../models/Kalle');

exports.getMessage = async (req, res) => {
    Kalle.find({}, (error, result) => {
        if(error){
            res.send(error);
        }
        res.send(result);
    })
};

exports.postMessage = async (req, res) => {
    const sentMessage = req.body.message;
    const time = req.body.time;
    const message = new Kalle({messageContent: sentMessage, timeOfMessage: time});
    try {
        await message.save();
        res.send('Inserted Data');
    } catch(err) {
        console.log(err)
    }
};
