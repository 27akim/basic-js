const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  depth = 1;
  calculateDepth(arr) {
    for(let item of arr)
    {
      if(Array.isArray(item))
      {
        this.depth++;
        this.calculateDepth(item);
      }
    }
    return this.depth;
  }
};