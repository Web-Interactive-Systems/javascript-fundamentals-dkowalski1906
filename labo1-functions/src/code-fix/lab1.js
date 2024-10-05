// TODO: Fix the errors in the functions below!

const functions = {
  sum(a, b) {
    // Todo use typeof and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw

    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    else {
      throw Error('Param is not a number');
    }
  },

  doubleNumbersInArray: function doubleNumbersInArray(array) {
    // Todo: use Array/map
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

    const double = function(e) {
      return 2 * e;
    }

    return array.map(double);
  },

  checkForBadWords(input) {
    // Todo: use Array/forEach and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

    let grosMot = ['Oh merde!'];

    const verifyBadWord = function (badWord) {
      if (badWord === input) {
        throw Error('Bad word');
      }
    }
    grosMot.forEach(verifyBadWord);
  },

  nameOfWeekDay(index) {
    const jours = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return jours[index];
  },

  sortNumbers(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    const sortedList = array.sort((a, b) => (a - b));
    return sortedList;
  },

  createCounterFunction(input) {

    let count = input;

    const counter = () => {
      count = count + 1;
      return count;
    }
    return counter;
  },

  createHelloMessage(name) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    return `Hello ${name}. Are you well?`;
  },

  callTheCallback(callback) {
    // Docs: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function pas ;cc ENZO <3

    callback(1, 2);
  },

  combineArrays(array1, array2) {
    array1.push(...array2);
    return array1;
  },

  promiseMeMoney() {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve('send message');
      }, 2000);
    });  
  },
  
};
module.exports = functions;
