function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(goodUsers, allUsersValid);
          return checkUsersValid.some(submittedUsers, goodUsers);
      };
    }
    
    module.exports = checkUsersValid
