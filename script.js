//1.anonymous function & IIFE:

//a)Print odd numbers in an array

//Using an anonymous function:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const printOddNumbers = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};
printOddNumbers(numbers);

//Using an IIFE:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})(numbers);

//b)Convert all the strings to title caps in a string array

//Using an anonymous function

const stringArray = ["hi this is madhavan"];
const convertToTitleCase = function(arr) {
  const titleCaseArray = arr.map(function(str) {
    return str
      .split(" ")
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
  return titleCaseArray;
};
const titleCaseStrings = convertToTitleCase(stringArray);
console.log(titleCaseStrings);


//Using an IIFE:


const stringArray = ["hello world", "javascript is fun", "title case example"];
(function(arr) {
  const titleCaseArray = arr.map(function(str) {
    return str
      .split(" ")
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
  console.log(titleCaseArray);
})(stringArray);



//c)Sum of all numbers in an array


//Using an anonymous function


const numbers = [1, 2, 3, 4, 5];
const sum = function(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};
const result = sum(numbers);
console.log(result); 


//Using an IIFE:


const numbers = [1, 2, 3, 4, 5];

const result = (function(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
})(numbers);
console.log(result); 



//d)Return all the prime numbers in an array


//Using an anonymous function:


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isPrime = function(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};
const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers); 


//Using an IIFE:


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = (function(arr) {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  return arr.filter(isPrime);
})(numbers);
console.log(primeNumbers);


//e)Return all the palindromes in an array:


//Using an anonymous function:


const words = ["radar", "hello", "level", "malayalam", "madam"];
const isPalindrome = function(word) {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
};
const palindromes = words.filter(isPalindrome);
console.log(palindromes); // This will print the palindromes in the array


//Using an IIFE:


const words = ["radar", "hello", "level", "sas"];
const palindromes = (function(arr) {
  function isPalindrome(word) {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
  }
  return arr.filter(isPalindrome);
})(words);
console.log(palindromes); // This will print the palindromes in the array



//f)Return median of two sorted arrays of the same size:


//Using an anonymous function:


const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const findMedianSortedArrays = function(arr1, arr2) {
  const mergeSortedArrays = function(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }
    return merged;
  };
  const mergedArray = mergeSortedArrays(arr1, arr2);
  const length = mergedArray.length;
  if (length % 2 === 0) {
    const middle1 = mergedArray[length / 2 - 1];
    const middle2 = mergedArray[length / 2];
    return (middle1 + middle2) / 2;
  } else {
    return mergedArray[Math.floor(length / 2)];
  }
};
const median = findMedianSortedArrays(nums1, nums2);
console.log(median);


//Using an IIFE:


const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const median = (function(arr1, arr2) {
  const mergeSortedArrays = function(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }
    return merged;
  };
  const mergedArray = mergeSortedArrays(arr1, arr2);
  const length = mergedArray.length;
  if (length % 2 === 0) {
    const middle1 = mergedArray[length / 2 - 1];
    const middle2 = mergedArray[length / 2];
    return (middle1 + middle2) / 2;
  } else {
    return mergedArray[Math.floor(length / 2)];
  }
})(nums1, nums2);
console.log(median);



//g)Remove duplicates from an array:


//Using an anonymous function:


const array = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const removeDuplicates = function(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
};
const result = removeDuplicates(array);
console.log(result);


//Using an IIFE:


const array = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const result = (function(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
})(array);
console.log(result);



//h)Rotate an array by k times


//Using an anonymous function:


const array = [1, 2, 3, 4, 5];
const k = 3;
const rotateArray = function(arr, k) {
  const n = arr.length;
  k = k % n;
  const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
  return rotatedArray;
};
const rotated = rotateArray(array, k);
console.log(rotated);


//Using an IIFE:


const array = [1, 2, 3, 4, 5];
const k = 3;
const rotated = (function(arr, k) {
  const n = arr.length;
  k = k % n;
  const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
  return rotatedArray;
})(array, k);
console.log(rotated);




//2.Using an arrow function:


//a)Print odd numbers in an array


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const printOddNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};
printOddNumbers(numbers);


//b)Convert all the strings to title caps in a string array


const stringArray = ["hi this is madhavan from pondicherry"];
const convertToTitleCase = (arr) =>
  arr.map((str) =>
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
const titleCaseStrings = convertToTitleCase(stringArray);
console.log(titleCaseStrings);


//c)Sum of all numbers in an array


const numbers = [1, 2, 3, 4, 5];
const sum = (arr) => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const result = sum(numbers);
console.log(result); // This will print the sum of the numbers


//d) Return all the prime numbers in an array:


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};
const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers);


//e)Return all the palindromes in an array


const isPalindrome = (word) => {
  return word === word.split('').reverse().join('');
};
const findPalindromesInArray = (arr) => {
  return arr.filter((word) => isPalindrome(word));
};
const myArray = ["level", "hello", "malayalam", "world", "radar"];
const palindromesInArray = findPalindromesInArray(myArray);
console.log(palindromesInArray);
