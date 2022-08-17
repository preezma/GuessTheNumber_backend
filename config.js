require('dotenv').config();

const mongo = {
    uri: process.env.MONGO_URI,
    statuses: {
        won: 'won',
        less: 'less',
        greater: 'greater',
    },
};

module.exports = mongo;