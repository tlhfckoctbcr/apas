export default {
  description() {
    return `
      There are two sorted arrays nums1 and nums2 of size m and n respectively.
      
      Find the median of the two sorted arrays. The overall run time complexity should be 0(log(m+n)).
      
      You may assume nums1 and nums2 cannot be both empty.
      
      Example 1:
      nums1 = [1, 3]
      nums2 = [2]
      The median is 2.0
      
      Example 2:
      nums1 = [1, 2]
      nums2 = [3, 4]
      The median is (2 + 3)/2 = 2.5
    `;
  },
  solution() {
    const nums1 = [1, 3];
    const nums2 = [2];

    function findMedianSortedArrays(arr1: number[], arr2: number[]) {
      let firstArr = arr1;
      let secondArr = arr2;

      if (arr1.length > arr2.length) {
        firstArr = arr2;
        secondArr = arr1;
      }

      let iMin = 0,
        iMax = firstArr.length,
        halfLen = (firstArr.length + secondArr.length + 1) / 2;

      while (iMin <= iMax) {
        let i = (iMin + iMax) / 2;
        let j = halfLen - i;

        if (i < iMax && secondArr[j-1] > firstArr[i]) {
          iMin = i + 1;
        } else if (i > iMin && firstArr[i-1] > secondArr[j]) {
          iMax = i - 1;
        } else {
          let maxLeft = 0;

          if (i === 0) maxLeft = secondArr[j-1];
          else if (j === 0) maxLeft = firstArr[i-1];
          else maxLeft = Math.max(firstArr[i-1], secondArr[j-1]);

          if ((firstArr.length + secondArr.length) % 2 === 1) return maxLeft;

          let minRight = 0;
          if (i === firstArr.length) minRight = secondArr[j];
          else if (j === secondArr.length) minRight = firstArr[i];
          else minRight = Math.min(secondArr[j], firstArr[i]);

          return (maxLeft + minRight) / 2.0;
        }
      }

      return 0.0;
    }

    console.log(findMedianSortedArrays(nums1, nums2));
  }
}
