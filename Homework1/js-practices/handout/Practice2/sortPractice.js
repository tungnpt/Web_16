'use strict'

function sort(input) {

  var temp;
  for (var i = 0; i < input.length; i++) {
    for (var j = i+1; j < input.length; j++) {
      if (input[i] > input[j]) {
        temp = input[i];
        input[i]=input[j];
        input[j]=temp;
      }
    }
  }
  return input;

  // if (input.length === 1) {
  //   // return once we hit an array with a single item
  //   return input
  // }
  //
  // const middle = Math.floor(input.length / 2) // get the middle item of the array rounded down
  // const left = input.slice(0, middle) // items on the left side
  // const right = input.slice(middle) // items on the right side
  //
  // return merge(
  //   sort(left),
  //   sort(right)
  // )
}

// compare the arrays item by item and return the concatenated result
// function merge (left, right) {
//   let result = []
//   let indexLeft = 0
//   let indexRight = 0
//
//   while (indexLeft < left.length && indexRight < right.length) {
//     if (left[indexLeft] < right[indexRight]) {
//       result.push(left[indexLeft])
//       indexLeft++
//     } else {
//       result.push(right[indexRight])
//       indexRight++
//     }
//   }
//
//   return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
// }

module.exports = sort
