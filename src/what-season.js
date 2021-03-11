const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === undefined)
  {
    return 'Unable to determine the time of year!';
  }
  if(typeof date.getMonth !== 'function')
  {
    throw new Error();
  }
  let monthNumber = date.getMonth();
  if(monthNumber > 2 && monthNumber < 6)
  {
    return 'spring';
  }
  if(monthNumber > 5 && monthNumber < 9)
  {
    return 'summer';
  }
  if(monthNumber > 8 && monthNumber < 12)
  {
    return 'autumn';
  }
  else
  {
    return 'winter';
  }
};