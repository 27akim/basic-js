const CustomError = require("../extensions/custom-error");

/*module.exports =*/ function repeater( str, options) {
  let resultStr = '';
  if(options.separator == undefined)
  {
    options.separator = '+';
  }
  if(options.additionSeparator == undefined)
  {
    options.additionSeparator = '';
  }
  if(options.repeatTimes == undefined)
  {
    options.repeatTimes = 1;
  }
  if(options.additionRepeatTimes == undefined)
  {
    options.additionRepeatTimes = 1;
  }
  if(options.addition == undefined)
  {
    options.addition = '';
  }
  for(let i = 0; i < options.repeatTimes; i++)
  {
    resultStr += str;
    for(let j = 0; j < options.additionRepeatTimes; j++)
    {
      resultStr = resultStr + options.addition;
      if(i != options.additionRepeatTimes - 1)
      {
        options.additionSeparator;
      }
    }
    if(i != options.repeatTimes - 1)
    {
      resultStr += options.separator;
    }
  }
  return resultStr;
}

console.log(repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 }));
  