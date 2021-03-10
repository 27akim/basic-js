const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str : '',

  getLength() {
    return this.str.split('~~').length;
  },
  addLink(value) {
    if(value === undefined)
    {
      value = ' ';
    }
    if(this.str.length == 0)
    {
      this.str += `(${value})`;
    }
    else
    {
      this.str += `~~(${value})`;
    }
    return this;
  },
  removeLink(position) {
    if(typeof(position) != Number || position > this.str.length-1 || n % 1 !== 0)
    {
      throw new Error();
    }
    position--;
    let m = this.str.split('~~');
    m.splice(position,1);
    this.str = m.join('~~');
    return this;
  },
  reverseChain() {
    this.str = this.str.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    let s = this.str;
    this.str = '';
    return s;
  }
};

module.exports = chainMaker;
