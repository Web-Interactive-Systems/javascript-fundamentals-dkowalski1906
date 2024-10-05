// TODO: Fix the errors in the functions below!

const functions = {
  // Computes the total order of a command
  // Rule: if total order is > 1000 the shipping is free
  orderTotal(order) {
    const totalNormalItems = order.items;
    let shippingPrice;
    let sum = 0;
    totalNormalItems.forEach(element => {
      if (element.name !== "Tax") {
        sum = sum + (element.price * element.quantity)
      }
      else {
        shippingPrice = element.price;
      }
    });
    if (sum <= 1000) {
      sum = sum + shippingPrice; 
    }
    return sum;
  },

  addPositive(array) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    let sum = 0;
    const addNumber = (e) => {
      const parseElement = parseInt(e);
      if (parseElement > 0) {
        sum = sum + parseElement;
      }
    }
    array.forEach(addNumber);
    return sum;
  },

  // Takes a string, find the first consecutively repeating character in it and return the last index of the repeated character. If there are no repeating characters, return -1. This function should ignore any spaces and should be case insensitive - treat 'a' as eqivalent to 'A'
  repeatingCharacter(string) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    const UpperCaseString = string.toUpperCase();
    let previousCharacter = 0;
    // let tab = UpperCaseString.split('');
    let result = -1;

    for (let i = 0; i < UpperCaseString.length - 1; i++) {
      let c1 = UpperCaseString.charAt(i);
      let c2 = UpperCaseString.charAt(i + 1);
      if ((c1 === ' ') || (c2 === ' ')) {
        continue
      }
      if (c1 === c2) {
        result = i + 1;
        break;
      }
    }
    return result;
  },

  // Takes an array of 1's and 0's, find the maximum number of consecutive 1's 
  // in this array. If there is any value other than 1 or 0 in the array, 
  // this is an error, return -1. The 1's and 0's may be either string or 
  // integer values, both are acceptable and should be considered equivalent
  maxOneNumber(array) {
    let maxCount = -1;
    let currentCount = 0;
    const cb = (e) => {
      if ((e !== 0) && (e !== 1)) {
        currentCount = -1;
        maxCount = -1;
        return false
      }
      if (e === 1) {
        currentCount = currentCount + 1;
      }
      else {
        maxCount = Math.max(currentCount, maxCount);
        currentCount = 0;
      }
    }

    let newArray = array.map(num => parseInt(num));
    newArray.forEach(cb);
    //
    // Todo
    return Math.max(currentCount, maxCount);
  },
};

module.exports = functions;
