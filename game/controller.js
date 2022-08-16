const mongoose = require('mongoose');
const Game = require('./model');
const { addMinutes } = require('../utils');
const { statuses } = require('../config');
/**
 * Get new game ID
 * @public
 */

exports.getGame = async (req, res) => {
  try {
    const endDate = addMinutes(3);
    const game = await new Game({
      number: Math.floor(1000 + Math.random() * 9000),
      startTime: new Date().toISOString(),
      endTime: endDate,
    }).save();
    game.number = undefined;
    return res.send(game);
  } catch (error) {
    return res.status(400).json({ message: 'Something went wrong! Please try again' });
  }
};
/**
 * Check the number
 * @public
 */
exports.submitResponse = async (req, res) => {
  try {
    const { id } = req.params;
    const { number } = req.body;
    if (!id) throw Error("Please provide valid id for starting your game")
    const theGameData = await Game.findById(id);
    if (theGameData.status !== 'inProcess') throw Error("Your round is expired, please start new game");
    let reply;
    switch (true) {
      case (new Date(theGameData.endTime.toString()) < new Date(Date.now())): reply = 'Your game is expired,but you can start new round!';
        await Game.findByIdAndUpdate(id, { status: 'expired' })
        break;
      case (number === theGameData.number): reply = { status: statuses.win };
        await Game.findByIdAndUpdate(id, {
          status: 'won'
        })
        break;
      case (number > theGameData.number): reply = {
        status: statuses.less
      };
        await Game.findByIdAndUpdate(id, { $push: { trials: number } })
        break;
      case (number < theGameData.number): reply = {
        status: statuses.greater
      }
        await Game.findByIdAndUpdate(id, { $push: { trials: number } })
        break;
    }
    return res.send(reply);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};
/**
 * Stop the game
 * @public
 */
exports.stopGame = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGame = await Game.findByIdAndUpdate(id, { status: 'expired' })
    return res.send(updatedGame);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Something went wrong! Please try again' });
  }
};
