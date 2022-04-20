function hasTargetSum(array, target) {
  // Write your algorithm here
  // for (let i = 0; i <= array.length; i++) {
  //   const j = array.length - 1 - i
  //   if (array[i] + array[j] !== target) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;


}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  retrun true if any 2 numbers in array added together equals the target number
  iterate from the start index and end index of array
  add numbers from both index
  return false if both numbers added !== target

  for(let i = 0; i < array.length / 2; i++){
    const j = array.length -1 -i
    if (array[i] + array[j] === target){
    return true;
  }else{
    return false
  }
  }
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
