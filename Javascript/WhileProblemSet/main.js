//Print all numbers between -10 and 19
var b = -10;

while (b <= 19) {
    console.log(b);
    b++;
}
//Print all even numbers bnetween 10 and 40
var counter = 10;

while (counter <= 40) {
    if (counter % 2 == 0) {
        console.log(counter);
    }
    counter++;
}

//Print all odd numbers between 300 and 333

var counterZ = 300;

while (counterZ <= 333) {
    if (counterZ % 2 !== 0) {
        console.log(counter);
    }
    counter++;
}

//Print all numbers divisible by 5 AND 3 between 5 and 50

var counterY = 5;

var z = 5;
var x = 3;
while (counterY <= 50) {
    if ((counterY % z == 0) && (counterY % x == 0)) {
        console.log(counterY);
    }
    counterY++;
}