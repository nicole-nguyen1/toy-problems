// naive solution
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// hash table solution
const twoSum = (nums, target) => {
    var sums = [];
    var hashTable = {};

    // check each element in array
    for (var i = 0; i < nums.length; i++) {

        var sumMinusElement = target - nums[i];

        // check if this number exists in hash table (constant time lookup)
        // if so then we found a pair of numbers that sum to S
        if (hashTable[sumMinusElement.toString()] !== undefined) { 
          sums.push([nums[i], sumMinusElement]);
        }

        // add the current number to the hash table
        // constant time lookup so you don't have to reiterate through
        hashTable[nums[i].toString()] = nums[i];
    
    }

    // return all pairs of integers that sum to S
    console.log(sums);
    return sums;
}

module.exports = twoSum;