let form = {
  name: {
    value: 'Masha',
    validationRules: {
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    errorMessage: "",
  },
  email: {
    value: 'email@example.com',
    validationRules: {
      required: true,
      email: true,
    },
    errorMessage: "",
  },
};

function isValidMinLength(minLength) {
  return function (username) {
    return username.length >= minLength;
  }
}

function isValidMaxLength(maxLength) {
  return function (username) {
    return username.length <= maxLength;
  }
}

function isEmpty(string) {
  return !string;
}

function isRequired(required) {
  return function (value) {
    if (required === true) {
      return !isEmpty(value);
    } else {
      return true;
    }
  }
}

function isValidatedEmailRegex(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function isValidatedEmail(email) {
  let atSymbolPosition = email.indexOf("@");
  let dotSymbolPosition = email.indexOf(".");

  return !(atSymbolPosition < 1 || dotSymbolPosition < 1);
}

function validation(obj) {
  for (keyValue in obj) {
    let keyObj = obj[keyValue];
    let propValue = keyObj.value;
    let valRules = keyObj.validationRules;

    for (rule in valRules) {
      switch (rule) {
        case 'required': {
          if (!isRequired(valRules[rule])(propValue)) {
            keyObj.errorMessage = "The field is required";
            return false;
          } else {
            break;
          }
        }
        case 'minLength': {
          if (!isValidMinLength(valRules[rule])(propValue)) {
            keyObj.errorMessage = rule + " is not valid";
            return false;
          } else {
            break;
          }
        }
        case 'maxLength': {
          if (!isValidMaxLength(valRules[rule])(propValue)) {
            keyObj.errorMessage = rule + " is not valid";
            return false;
          } else {
            break;
          }
        }
        case 'email': {
          if (!valRules[rule]) {
            break;
          }

          if (!isValidatedEmail(propValue)) {
            keyObj.errorMessage = rule + " is not valid";
            return false;
          } else {
            break;
          }
        }
      }
    }
  }

  return true;
}

console.log(validation(form));