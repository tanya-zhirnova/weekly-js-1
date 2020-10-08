var array = [2, 1.5, 45, 66.3, 5];
var num = 5;
var a = 0;

for (var i = 0; i <= array.length; i++) {
    if (array[i] % num == 0) {
        a++
    }
} console.log(a)