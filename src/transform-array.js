const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let resultArr = [];
  arr.forEach( item => resultArr.push(item));
  if(!Array.isArray(arr))
  {
    throw new Error();
  }
  if(arr.length === 0)
  {
    return [];
  }
  for(let i = 0; i < resultArr.length; i++)
  {
    if(resultArr[i] === '--discard-next')
    {
      try{
        if(typeof resultArr[i+1] == 'number')
        {
          delete resultArr[i];
          delete resultArr[i+1];
        }
      }
      catch(e)
      {
        continue;
      }
    }
    if(resultArr[i] === '--discard-prev')
    {
      try{
        if(typeof resultArr[i-1] == 'number')
        {
          delete resultArr[i];
          delete resultArr[i-1];
        }
      }
      catch(e)
      {
        continue;
      }
    }
    if(resultArr[i] === '--double-next')
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
    if(resultArr[i] === '--double-prev')
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
    if(typeof resultArr[i] == 'string' || resultArr[i] == null)
    {
      resultArr.splice(i,1);
      i--;
    }
  }
  return resultArr;
};

