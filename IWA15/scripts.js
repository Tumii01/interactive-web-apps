
const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ]
  };
  
  // Only edit below

  // Initialize variables to extract the names and values of each list
  let [firstListName, firstList] = data.lists[0];
  let [secondListName, secondList] = data.lists[1];
  let [thirdListName, thirdList] = data.lists[2];

  // Initialize an empty array to store the results
  const result = [];

  // A function to extract the largest value from the lists and add it to the result array
  const extractBiggest = () => {
    let largestValue = -Infinity;
    let largestList = null;

  // Check if the last value in the first list is the largest so far
    if (firstList.length > 0 && firstList[firstList.length - 1] > largestValue) {
      largestValue = firstList[firstList.length - 1];
      largestList = firstList;
    }

  // Check if the last value in the second list is the largest so far
    if (secondList.length > 0 && secondList[secondList.length - 1] > largestValue) {
      largestValue = secondList[secondList.length - 1];
      largestList = secondList;
    }

  // Check if the last value in the third list is the largest so far
    if (thirdList.length > 0 && thirdList[thirdList.length - 1] > largestValue) {
      largestValue = thirdList[thirdList.length - 1];
      largestList = thirdList;
    }

  // If a largest value was found, add it to the result array and remove it from its original list
    if (largestList !== null) {
      result.push(largestValue);
      largestList.pop();
    }
  };
  
  // Only edit above
  
  extractBiggest();
  extractBiggest();
  extractBiggest();
  extractBiggest();
  extractBiggest();
  
  extractBiggest();
  extractBiggest();
  extractBiggest();
  extractBiggest();
  extractBiggest();
  
  extractBiggest();
  extractBiggest();
  extractBiggest();
  extractBiggest();
  extractBiggest();
  
  console.log(result);
  


// const data = {
// 	lists: [
// 		['first', [15, 11, 13, 7, 5]],
// 		['second', [2, 6, 8, 4, 14, 12, 10]],
// 		['third', [9, 3, 1]],
// 	]
// }

// // Only edit below

// const { first = 1 } = data.first || {}
// const { second = 1 } = data.second || {}
// const { third = 1 } = data.third || {}

// const result = []

// const extractBiggest = () => {
// 	if (first[-1] > second[-1]) {
// 		return first
// 	}

// 	if (third[-1] < 1) {
// 		return second
// 	}
	
// 	return third
// }

// // Only edit above

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

// console.log(result)
