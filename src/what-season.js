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
  if (1 < month && month <= 4) {
    return "spring";
  } 
 if (4 < month && month <= 7) {
    return "summer";
  }
  if (7 < month && month <= 10) {
    return "autumn";
  }
    else
  {
    return 'winter';
  }
};