const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  number: {
    type: Number,
  },
  startTime: {
    default: new Date().toLocaleString(),
    type: Date,
  },
  endTime: {
    type: Date,
  },
  status: {
    type: String,
    default: 'inProcess',
    enum: ['won', 'expired', 'inProcess']
  },
  trials: [
    {
      type: Number,
      select: false
    }
  ],
},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  });

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
