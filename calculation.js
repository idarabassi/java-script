class Calculation {
  add(num1, num2) {
    return `The sum of the numbers ${num1} and ${num2} is ${num1 + num2}`;
  }

  subtract(num1, num2) {
    return `The difference between the numbers ${num1} and ${num2} is ${
      num1 - num2
    }`;
  }

  multiply(num1, num2) {
    return `The multiplication of the numbers ${num1} and ${num2} is ${
      num1 * num2
    }`;
  }

  divide(num1, num2) {
    return `The division of the numbers ${num1} and ${num2} is ${num1 / num2}`;
  }

  square(num) {
    return `The square of the number ${num} is ${num ** 2}`;
  }
}

export default Calculation;