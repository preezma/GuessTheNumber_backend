require('dotenv').config();

const mongo = {
    uri: process.env.MONGO_URI,
    statuses: {
        win: 'win',
        less: 'less',
        greater: 'greater',
    },
};

module.exports = mongo;