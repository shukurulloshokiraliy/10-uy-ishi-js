//1-masala
// let arr = [1, 2, 3];
// arr.push(prompt("Yangi qiymat kiriting:"));
// alert(arr);

//2-masala
// function removeLast(arr) {
//     arr.pop();
//     return arr;
//   }

//   let arr = [10, 20, 30];
//   console.log(removeLast(arr));

//3-masala

// function addToStart(arr, value) {
//     arr.unshift(5);
//     return arr;
//   }
//    let arr = [10, 15, 20];
//    console.log(addToStart(arr));

//4-masala
// function removeFirst(arr) {
//     arr.shift();
//     return arr;
//   }
//    let arr = [10, 15, 20];
//    console.log(removeFirst(arr));

//5-masala
// function cleanString(str) {
//     return str.trim();
//   }

//   let matn = prompt("Matn kiriting:");
//   console.log("Tozalandi: " + cleanString(matn));

// //6-masala
// function shout(str) {
//     return str.toUpperCase();
//   }

//   let matn = prompt("Matn kiriting:");
//   console.log("o'zgardi: " +  shout(matn));

//7-masala
// 7-masala
// Massivda qiymat bor-yo‘qligini tekshiring.
// Foydalanish: includes()

// function hasValue(arr, value) {
//     return arr.includes(value);
//   }

//   let arr = [1,8,0,8,1808];
//   let qiymat = prompt("Qaysi qiymatni qidirasiz?");
//   alert(hasValue(arr, isNaN(qiymat) ? qiymat : Number(qiymat)) ? "Bor" : "Yo‘q");

//O'RTACHA DARAJA

// 8-masala
// function startsWithA(str) {
//     return str.toLowerCase().startsWith("a");
//   }
//   console.log("8:", startsWithA("Apple"));

//   // 9-masala
//   function containsApple(arr) {
//     return arr.includes("apple");
//   }
//   console.log("9:", containsApple(["banana", "apple", "orange"]));

//   // 10-masala
//   function getKeys(obj) {
//     return Object.keys(obj);
//   }
//   console.log("10:", getKeys({ name: "Ali", age: 25 }));

//   // 11-masala
//   function getValues(obj) {
//     return Object.values(obj);
//   }
//   console.log("11:", getValues({ name: "Ali", age: 25 }));

//   // 12-masala
//   function removeSpaces(str) {
//     return str.replaceAll(" ", "");
//   }
//   console.log("12:", removeSpaces("salom dunyo"));

//   // 13-masala
//   function reverseArray(arr) {
//     return arr.reverse();
//   }
//   console.log("13:", reverseArray([1, 2, 3]));

//   // 14-masala
//   function objectToEntries(obj) {
//     return Object.entries(obj);
//   }
//   console.log("14:", objectToEntries({ a: 1, b: 2 }));

//   // 15-masala
//   function hasAdmin(obj) {
//     return obj.hasOwnProperty("admin");
//   }
//   console.log("15:", hasAdmin({ user: true, admin: false }));

//   // 16-masala
//   function lastThree(str) {
//     return str.slice(-3);
//   }
//   console.log("16:", lastThree("javascript"));


//   // 18-masala
//   function addComma(str) {
//     return str.replaceAll(" ", ", ");
//   }
//   console.log("18:", addComma("salom dunyo"));

//   // 19-masala
//   function lastBananaIndex(arr) {
//     return arr.lastIndexOf("banana");
//   }
//   console.log("19:", lastBananaIndex(["apple", "banana", "orange", "banana"]));

//   // 20-masala
//   function sliceMiddle(arr) {
//     return arr.slice(2, 6);
//   }
//   console.log("20:", sliceMiddle([0, 1, 2, 3, 4, 5, 6]));
