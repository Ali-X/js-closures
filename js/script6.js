let form = {
  name: {
    value: 'Masha',
    validationRules: {
      minLength: 3,
      maxLength: 20,
      required: true,
    },
    errorMessage: "Username is incorrect!",
  },
  email: {
    value: 'email@example.com',
    validationRules: {
      email: true,
      required: true,
    },
    errorMessage: "Email is incorrect!",
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

function isRequired(string) {
  return string === true;
}

function isValidatedEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateName(nameObj) {
  //name properties
  let nameValue = nameObj['value'];
  let minLength = nameObj['validationRules']['minLength'];
  let maxLength = nameObj['validationRules']['maxLength'];
  let requiredValue = nameObj['validationRules']['required'];

  //length validators
  let minLengthValidator = isValidMinLength(minLength);
  let maxLengthValidator = isValidMaxLength(maxLength);

  return !isEmpty(nameValue) && maxLengthValidator(nameValue) && minLengthValidator(nameValue) && isRequired(requiredValue);
}

function validateEmail(emailObj) {
  //email properties
  let emailValue = emailObj['value'];
  let requiredValue = emailObj['validationRules']['required'];

  return !isEmpty(emailValue) && isRequired(requiredValue) && isValidatedEmail(emailValue);
}

function validation(obj) {
  let nameObj = obj['name'];
  let emailObj = obj['email'];

  let isNameValidated = validateName(nameObj);
  let isEmailValidated = validateEmail(emailObj);

  if (!isNameValidated) {
    return nameObj['errorMessage'];
  }

  if (!isEmailValidated) {
    return emailObj['errorMessage'];
  }

  return true;
}

console.log(validation(form));