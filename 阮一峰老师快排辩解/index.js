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

// 分析阮一峰版每次递归都需要开个2个临时数组, 这就导致了空间复杂度暴涨,这是个什么概念? 下面是测试结果

const arr = [];

// 生成随机整数
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

// 生成length长度的随机数组

function generateArr(len) {
    for(var i = 0; i < len; i++) {
        arr.push(random(1, len));
    }
}

// 统计占用了多少空间

let sum = 0;
var quickSort = function(arr) {
    if(arr.length <= 1) {
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
    sum = right.length + left.length + sum;
    return quickSort(left).concat([pivot], quickSort(right))
}
// 生成十万个成员的数组
generateArr(100000);

// 将数组反向排序, 目的是使得接下来的快排达到最差情况
arr.sort((a, b) => b - a); //b - a 是倒序 a - b 是正序
quickSort(arr);

console.log(sum) // 1481308 

// --------------------------------------------------------------------------------------------------------

// 快速排序是分治策略的经典实现,  分治策略如下:

// 分解步骤: 将问题划分为一些子问题, 子问题的形式与原问题一样, 只是规模更小
// 解决步骤: 递归的求解子问题, 如果子问题的规模足够小, 那就停止递归, 直接求解
// 合并步骤: 将子问题的解组合成原问题的解

// 快速排序函数
function swap(array, a, b) {
    // es6版
      [array[a], array[b]] = [array[b], array[a]];
    // es5版
    /* const temp = array[a];
      array[a] = array[b];
      array[b] = temp; */
}
// 划分操作函数
function partition(array, left, right) {
    // 用索引去取中间值而非splice
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while(i <= j) {
        while(compare(array[i], pivot) === -1) {
            i++;
        }
        while(compare(array[i], pivot) === 1) {
            j--;
        }
        if(i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}
// 比较函数
function compare(a, b) {
    if(a === b) {
        return 0;
    }
    return a < b ? -1 : 1; 
}
// 执行主导函数
function quick(array, left, right) {
    let index;
    if (array.length > 1){
        index = partition(array, left, right);
        if(left < index - 1) {
            quick(array, left, index - 1);
        }
        if(index < right) {
            quick(array, index, right);
        }
    }
    return array;
}

function quickSort(array) {
    return quick(array, 0, array.length - 1);
} 