const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let resultArr = arr.slice();
  console.log(typeof resultArr[3]);
  if(resultArr.length == 0)
  {
    throw new Error();
  }
  for(let i = 0; i < resultArr.length; i++)
  {
    if(resultArr[i] == '--discard-next')
    {
      try{
        if(typeof resultArr[i+1] == 'number')
        {
          resultArr.splice(i+1,1);
        }
      }
      catch(e)
      {
        continue;
      }
    }
    if(resultArr[i] == '--discard-prev')
    {
      try{
        if(typeof resultArr[i-1] == 'number')
        {
          resultArr.splice(i-1,1);
        }
      }
      catch(e)
      {
        continue;
      }
    }
    if(resultArr[i] == '--double-next')
    {
      try{
        if(typeof resultArr[i+1] == 'number')
        {
          resultArr[i] = resultArr[i+1];
        }
      }
      catch(e)
      {
        continue;
      }
    }
    if(resultArr[i] == '--double-prev')
    {
      try{
        if(typeof resultArr[i-1] == 'number')
        {
          resultArr[i] = resultArr[i-1];
        }
      }
      catch(e)
      {
        continue;
      }
    }
  }
  for(let i = 0; i < resultArr.length; i++)
  {
    if(typeof resultArr[i] == 'string')
    {
      resultArr.splice(i,1);
      i--;
    }
  }
  return resultArr;
};

