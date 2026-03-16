
console.log("JavaScript connected!");


// var x = 5;
// var y = 7;

// var z = x + y;

// console.log(z);

// var A = "Hello ";
// var B = "world!";

// var C = A + B;

// console.log(C);

// function sumNPrint(x1, x2) {
//     var result = x1 + x2;
//     console.log(result);
// }

// sumNPrint(x, y);
// sumNPrint(A, B);

// if (C.length > z) {
//     console.log(C);
// } else if (C.length < z) {
//     console.log(z);
// } else {
//     console.log("good job!");
// }


// var L1 = ["Watermelon","Pineapple","Pear","Banana"];
// var L2 = ["Apple","Banana","Kiwi","Orange"];

// function findTheBanana(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "Banana") {
//             alert("Banana found!");
//         }
//     }
// }

// findTheBanana(L1);
// findTheBanana(L2);


var now = new Date();
var hour = now.getHours();

function greeting(h) {

    var greet = document.getElementById("greeting");

    if (greet) {

        if (h < 5 || h >= 20) {
            greet.innerHTML = "Good night, welcome to MonoMuse.";
        }
        else if (h < 12) {
            greet.innerHTML = "Good morning, welcome to MonoMuse.";
        }
        else if (h < 18) {
            greet.innerHTML = "Good afternoon, welcome to MonoMuse.";
        }
        else {
            greet.innerHTML = "Good evening, welcome to MonoMuse.";
        }

    }
}

greeting(hour);

var year = new Date().getFullYear();

var footerYear = document.getElementById("year");

if (footerYear) {
    footerYear.innerHTML = year;
}