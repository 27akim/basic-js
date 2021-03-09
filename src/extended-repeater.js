const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {
  let resultStr = '';
  if(options.separator == undefined)
  {
    options.separator = '+';
  }
  if(options.additionSeparator == undefined)
  {
    options.additionSeparator = '|';
  }
  for(let i = 0; i < options.repeatTimes; i++)
  {
    resultStr += str;
    for(let j = 0; j < options.additionRepeatTimes; j++)
    {
      resultStr = resultStr + options.addition + 
      options.additionSeparator;
    }
    resultStr += options.separator;
  }
  return resultStr;
}
  