function addMinutes(numOfMinutes, date = new Date()) {
  date.setMinutes(date.getMinutes() + numOfMinutes);

  return date;
}
const utils = {
  addMinutes
};
module.exports = utils;