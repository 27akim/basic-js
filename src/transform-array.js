const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  console.log(typeof arr[3]);
  if(!Array.isArray(arr))
  {
    throw new Error();
  }
  for(let i = 0; i < arr.length; i++)
  {
    if(arr[i] == '--discard-next')
    {
      try{
        if(typeof arr[i+1] == 'number')
        {
          arr.splice(i+1,1);
        }
      }
      catch(e)
      {
        continue;
      }
    }
    if(arr[i] == '--discard-prev')
    {
      try{
        if(typeof arr[i-1] == 'number')
        {
          arr.splice(i-1,1);
        }
      }
      catch(e)
      {
        continue;
      }
    }
    if(arr[i] == '--double-next')
    {
      try{
        if(typeof arr[i+1] == 'number')
        {
          arr[i] = arr[i+1];
        }
      }
      catch(e)
      {
        continue;
      }
    }
    if(arr[i] == '--double-prev')
    {
      try{
        if(typeof arr[i-1] == 'number')
        {
          arr[i] = arr[i-1];
        }
      }
      catch(e)
      {
        continue;
      }
    }
  }
  for(let i = 0; i < arr.length; i++)
  {
    if(typeof arr[i] == 'string')
    {
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
};

