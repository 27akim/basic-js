const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  N = this.alphabet.length;
  machineType = 'direct';
  flag = true;

  constructor(flag){
    if(flag !== undefined)
    {
      this.flag = flag;
    }
  }

  encrypt(message, key) {
    if(message === undefined || key === undefined)
    {
      throw new Error();
    }
    let result = '';
    let keywordIndex = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    for(let c of message)
    {
      if(this.alphabet.indexOf(c) >= 0)
      {
        let n = (this.alphabet.indexOf(c) + this.alphabet.indexOf(key[keywordIndex])) % this.N;
        result += this.alphabet[n]; 
      }
      else
      {
        result += c;
        continue;
      }
      keywordIndex++;
      if(keywordIndex == key.length)
      {
        keywordIndex = 0;
      }
    }
    return this.flag ? result : result.split('').reverse().join('');
  }    
  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined || key === undefined)
    {
      throw new Error();
    }
    let result = '';
    let keywordIndex = 0;
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    for(let c of encryptedMessage)
    {
      if(this.alphabet.indexOf(c) >= 0)
      {
        let n = (this.alphabet.indexOf(c) + this.N - this.alphabet.indexOf(key[keywordIndex])) % this.N;
        result += this.alphabet[n]; 
      }
      else
      {
        result += c;
        continue;
      }
      keywordIndex++;
      if(keywordIndex == key.length)
      {
        keywordIndex = 0;
      }
    }
    return this.flag ? result : result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;