const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === undefined)
  {
    return 'Unable to determine the time of year!';
  }
  if(Object.prototype.toString.call(date) === '[object Date]')
  {
    throw new Error();
  }
  let monthNumber = date.getMonth();
  if(monthNumber > 2 && monthNumber < 5)
  {
    return 'spring';
  }
  if(monthNumber > 4 && monthNumber < 8)
  {
    return 'summer';
  }
  if(monthNumber > 7 && monthNumber < 11)
  {
    return 'autumn';
  }
  else
  {
    return 'winter';
  }
};