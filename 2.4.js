var arr = ['5', '3', 'с'];
var arry = [];

for (var i = arr.length - 1; i >= 0; i--) {
    arry[arr.length - i - 1] = arr[i]
}

console.log(arry)