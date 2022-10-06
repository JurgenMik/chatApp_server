const Laura = require('../models/Laura');

exports.getMessage = async (req, res) => {
    Laura.find({}, (error, result) => {
        if(error){
            res.send(error);
        }
        res.send(result);
    })
};

exports.postMessage = async (req, res) => {
    const sentMessage = req.body.message;
    const time = req.body.time;
    const message = new Laura({messageContent: sentMessage, timeOfMessage: time});
    try {
        await message.save();
        res.send('Inserted Data');
    } catch(err) {
        console.log(err)
    }
};