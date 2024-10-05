// TODO: Fix the errors in the functions below!

const functions = {
  // This function takes an array of numbers and returns a new array with each number squared.
  squareNumbers(numbers) {
    // square numbers;
    const square = function (e) {
      return e * e;
    };
    const squared = numbers.map(square);
    return squared;
  },

  // This function takes an array of strings and returns a new array with only the strings that contain the letter 'a'.
  filterStrings(strings) {
    // filter
    let filteredStrings = [];
    const cb = (e) => {
      return e.includes('a');
    };
    filteredStrings = strings.filter(cb);
    return filteredStrings;
  },

  // This function takes an array of numbers and returns the sum of all the numbers in the array.
  sumReduceNumbers(numbers) {
    // let sum = 0;

    // function add(number) {
    //   result += number
    // }

    // numbers.forEach(add);
    return numbers.reduce((prev, curr) => prev + curr, 0);
  },

  // removes last element of an array and returns it
  helper1(array) {
    return array.pop();
  },

  // add one element to an array
  helper2(arr, newOne) {
    arr.push(newOne);
    return arr;
  },

  // removes first element from an array and returns a new array
  helper3(arr) {
    return arr.shift();
  },

  // add elements to the top of an array
  helper4(arr, ...elements) {
    arr.unshift(...elements);
    return arr;
  },

  // takes an array, a starting index, the number of elements to remove, and any number of additional items to insert into the array at the specified starting index
  helper5(arr, start, deleteCount, ...items) {
    let test = arr.splice(start, deleteCount, ...items);
    return test;
  },

  // takes an array and two indices (start and end) as parameters, and returns a new array containing the elements from the original array between the start and end indices (excluding the element at the end index)
  helper6(array, start, end) {
    return array.slice(start, end);
  },

  // concat two arrays
  helper7(arr1, arr2) {
    let finalArr = [...arr1];
    finalArr.push(...arr2);
    return finalArr;
  },

  // see unit tests for helper8 function
  helper8(arr, element) {
    let index = -1;
    arr.forEach((e, i) => {
      if (e === element) {
        index = i
      }
    });
    return index;
  },

  // see unit tests for helper9 function
  helper9(array, value) {
    let result = array.some(e => e === value)
    return result;
  },

  // see unit tests for helper10 function
  helper10(array, callback) {
    let element = undefined
    element = array.find(callback)
    return element;
  },

  // see unit tests for helper11 function
  helper11(arr, predicate) {
    let index = undefined
    index = arr.findIndex(predicate)
    return index;
  },

  // takes an array arr and a callback function, and returns a boolean value indicating whether every element in the array satisfies the condition specified by the callback function
  helper12(arr, callback) {
    return arr.every(callback);
  },

  // takes an array arr and a callback function, returns true if at least one element in the array satisfies the condition specified in the callback function
  helper13(arr, funcCallback) {
    return arr.some(funcCallback);
  },

  // see unit tests for helper14 function
  helper14(arr, separator) {
    return arr.join(separator);
  },

  // takes an array of numbers and returns the sum of all the numbers in the array using forEach.
  sumEachNumbers(numbers) {
    let sum = 0
    sum = numbers.reduce((acc, num) => acc + num, 0)
    return sum;
  },

  // takes an array of numbers, multiplies each number by 2, and returns the sum of even numbers.
  sumDoubledEvenNumbers(numbers) {
    // filter even number... num % 2 === 0
    const even = numbers.filter(num => num % 2 === 0);
    const sum = even.map(num => num * 2).reduce((acc, num) => acc + num, 0);
    return sum;
  },
};

module.exports = functions;
