const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array, depth = 1, n=[])
  {
      n.push(depth);
      array.forEach(element => {
          if(Array.isArray(element))
          {
              this.calculateDepth(element,depth + 1, n);
          } 
      });
      return Math.max(...n);
  }
};