/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/**
 * NPM Module dependencies.
 */
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const MongoClient = require('mongoose');
const routes = require('./game/route');

/**
 * Create Express server && Express Router configuration.
 */
const server = express();
const whitelist = null;
const corsOptions = {
  exposedHeaders: 'authorization, x-refresh-token, x-token-expiry-time',
  origin: (origin, callback) => {
    if (!whitelist || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

server.use(cors(corsOptions));
server.use(express.json());
server.use('/game', routes);


const port = process.env.PORT;
const uri = process.env.MONGO_URI;

/**
 * Connect Mongo Driver to MongoDB Atlas.
 */
let db;
MongoClient.connect(uri, (err, database) => {
  if (err) {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
  }
  db = database;
  server.listen(port, () => {
    console.info(`Server started on port ${port}`);
  });
});
