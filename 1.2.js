var string = "do679jnd"
var elementofstring = 0
var res = ""
do {
    if (string[elementofstring] >= 0) {
        res = res + string[elementofstring]
    }
    elementofstring++
}
while (elementofstring < string.length);
console.log(res);