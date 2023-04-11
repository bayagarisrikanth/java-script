var num = 13;
var sum = num;
var length = 0;
var check = num;
var armstorng = num;
var len = num.toString().length;
var power = 0;
while (num != 0) {
                    armstorng = num % 10;
                    power = Math.pow(armstorng, len);
                    sum = sum + power;
                    num = parseInt(num / 10);




}
if (check == sum) {
                    console.log(check + " is armstrong number");
}
else {
                    console.log(check + " is not armstrong number");
}
