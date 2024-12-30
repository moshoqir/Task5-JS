//1

var arr1 = [1, 2, 38, 4, 5];

function largestElement() {
  var larg = arr1[0];

  for (i = 1; i < arr1.length; i++) {
    if (arr1[i] > larg) {
      larg = arr1[i];
    }
  }

  console.log(larg);
}

largestElement();

console.log("************2****************");

var arr1 = [1, -2, 38, 4, 5];

function smallestElement() {
  var small = arr1[0];

  for (i = 1; i < arr1.length; i++) {
    if (arr1[i] < small) {
      small = arr1[i];
    }
  }

  console.log(small);
}
smallestElement();

console.log("************3***************");

var arr1 = [1, -2, 38, 4, 5];

function sum() {
  var sum = 0;
  for (i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }

  console.log(sum);
}

sum();

console.log("************4***************");

var arr1 = [1, -2, 38, 4, 5];

function average() {
  var sum = 0;

  for (i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }

  console.log(`${sum / arr1.length}`);
}
average();

console.log("************5***************");

var arr1 = [1, -2, 8, 4, 5];

function median() {
  var newArr = arr1.sort();

  console.log(newArr[arr1.length / 2]);
}

console.log(median());

console.log("************6***************");

var arr1 = [1, 5, 8, 4, 5, 1, 9];
function duplicate() {
  var newArr = [...new Set(arr1)];

  console.log(newArr);
}

duplicate();

console.log("************7***************");

var arr1 = [1, 5, 8, 4, -57, -2, 9];

function order() {
  console.log(arr1.sort((a, b) => a - b));
}

order();

console.log("************8***************");

var arr1 = [1, 5, 8, 4, -57, -2, 9];

function reverseOrder() {
  console.log(arr1.sort((a, b) => b - a));
}

reverseOrder();

console.log("************9***************");

var arr1 = [1, 5, 8, 4, -57, -2, 9];

function shuffleArray() {
  for (let i = arr1.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
  }

  return arr1;
}

console.log(shuffleArray());
