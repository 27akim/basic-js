const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeamName = '';
  if(members == null)
  {
    return false;
  }
  for(let i = 0; i < members.length; i++)
  {
    if(typeof members[i] != 'string')
    {
      continue;
    }
    dreamTeamName += members[i].trim()[0].toUpperCase();
  }
  if(dreamTeamName == '')
  {
    return false;
  }
  return dreamTeamName.split('').sort().join('');
};

