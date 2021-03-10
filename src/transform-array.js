const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(typeof arr != Array)
  {
    throw new Error();
  }
  for(let i = 0; i < arr.length; i++)
  {
    if(arr[i] == '--discard-next')
    {
      try{
        arr.splice(i+1,1);
      }
      catch(e)
      {
        continue;
      }
    }
    if(arr[i] == '--discard-prev')
    {
      try{
        arr.splice(i-1,1);
      }
      catch(e)
      {
        continue;
      }
    }
    if(arr[i] == '--double-next')
    {
      try{
        arr[i] = arr[i+1];
      }
      catch(e)
      {
        continue;
      }
    }
    if(arr[i] == '--double-prev')
    {
      try{
        arr[i] = arr[i-1];
      }
      catch(e)
      {
        continue;
      }
    }
  }
  return arr;
};
