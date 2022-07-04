/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  if (nums.length === 1) {
    return;
  }

  // step 1 O(n):
  let i = nums.length - 2;
  while (i >= 0) {
    if (nums[i] < nums[i + 1]) {
      break;
    }
    i--;
  }
  if (i < 0) {
    nums.reverse();
  } else {
    // step 2
    let max = nums[i];
    let j = nums.length - 1;
    while (j > i) {
      if (nums[j] > nums[i]) {
        break;
      }
      j--;
    }
    // step 3
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    // step 4
    const unSorted = nums.slice(i + 1);
    nums.length = i + 1;
    unSorted.sort((a, b) => a - b);
    nums.push.apply(nums, unSorted);
  }
}

/**
 * I don't know how many guys come up this solution only by himself. At least I cannot, I even don't know what is the next permutation. I stole this solution from somewhere to here because I don't see a clear explanation in LeetCode discussion. I think the biggest problem of this community is people here are too smart. They like writing "short code", they like using annotations like nums[k] < nums[k + 1], they don't like to give example. Even when a problem as abstract as this one.

I don't think any one can understand this solution without seeing an example, here is an example:
2,3,6,5,4,1

Solution:
Step1, from right to left, find the first number which not increase in a ascending order. In this case which is 3.
Step2, here we can have two situations:

We cannot find the number, all the numbers increasing in a ascending order. This means this permutation is the last permutation, we need to rotate back to the first permutation. So we reverse the whole array, for example, 6,5,4,3,2,1 we turn it to 1,2,3,4,5,6.

We can find the number, then the next step, we will start from right most to leftward, try to find the first number which is larger than 3, in this case it is 4.
Then we swap 3 and 4, the list turn to 2,4,6,5,3,1.
Last, we reverse numbers on the right of 4, we finally get 2,4,1,3,5,6.

Time complexity is: O(3*n)=O(n).

At the end, I don't know how to come up this solution. Here is just to understand the solution with example. Hope this helps.


 */
