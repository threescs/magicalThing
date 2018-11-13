// 今天看了一篇博客'面试官: 阮一峰版快速排序完全是错的'

// 做下记录
// 阮一峰版本 ↓↓↓
var quickSort = function(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort([1,5,9,3,10,99,4])) 
 
 
//  第一次跟 3比较 并且把3抽出来
// 1 3 5 9 10 99 4
// 第二次跟 9比较 并且把9抽出来
//  1 3 5 4 9 10 99
// 第三次跟4比较 并且4把抽出 
// 1 3 4 5 9 10 99 

// --------------------------------------------------------------------------------------------------

// 下面是有有序数组的二分查找 (详见二分查找.gif)[ O(㏒n)]
function binarySearch(target, arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = parseInt(start + (end - start) / 2);
      if (target == arr[mid]) {
        return mid;
      } else if (target > arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  }
  
//  下面是一个简单的顺序搜索算法(这个循环比较复杂)[O(n)]
function search (arr, target) {
    let index = -1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            index = i
        }
    }
}

// 下面属于平方级别的复杂度: 冒泡排序

function bubbleSort(arr) {
    let len = arr.length;
    for(let i = 0; i < len -1; i++) {
        for(let j = 0;j < len - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp
            }
        }
    }
    return arr;
}