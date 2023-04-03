const stringLength = (string) => {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  }
  throw new Error("String lenght must be between one and ten characters.");
};

const stringReverse = (string) => {
  return string.split("").reverse().join("");
};

class calculator {
  static add(num1, num2) {
    return num1 + num2;
  }

  static subtract(num1, num2) {
    return num1 - num2;
  }

  static divide(num1, num2) {
    return num1 / num2;
  }

  static multiply(num1, num2) {
    return num1 * num2;
  }
}

const stringCapitalize = (string) => {
  return string.charAt(0).toUpperCase().concat(string.split("").splice(1).join(""));
}

module.exports = { stringLength, stringReverse, calculator, stringCapitalize };
