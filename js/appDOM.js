//1.alert 與 prompt

// console.log(window);

// let DataAlert = window.alert('ddd', 'ddd');
// console.log(DataAlert);
// let Data = window.prompt('預設值', '18');
// console.log(Number(Data));

//2 .setInterval() 與 clearInterval() 
// let count = 0;
// let getInterval;

// function showLogHi() {
//     window.console.log('練習使用 window.sewtInterval', count + ' Hi');
//     count++

//     if (count === 10) {
//         clearInterval(getInterval);
//     }
// }

// getInterval = setInterval(showLogHi, 500);

//3. basic oop
// let Ivy = {
//     name: 'Ivy',
//     gender: 'female'
// }


// let Tim = {
//     name: 'Tim',
//     gender: 'male',
//     wife: Ivy,
//     showData() {
//         console.log('My wife Data is ', this.wife.name);
//     }
// }

// console.log(Tim.wife);
// Tim.showData();

//4.console 
// console.log('log');
// console.error('This is red color');
// console.warn('Warring');

//5.Document
// console.log(document);
//5.1 getElementById, getElementsByClassName
// let h1Header = document.getElementById('headerTitle');
// let hP1 = document.getElementsByClassName('second');
// let hP2 = document.getElementsByClassName('second');

// console.log(h1Header);
// console.log(hP1);
// console.log(hP2);

//5.2 createElement
// let addElement = document.createElement('h1');


//5.3 querySelector, querySelectorAll
// let pTagQuery = document.querySelector('p.second');
// let pClassoneQuerySelector = document.querySelector('.second');
// let pClassAllQuerySelectorAll = document.querySelectorAll('.second');

// console.log(pTagQuery);
// console.log(pClassoneQuerySelector);
// console.log(pClassAllQuerySelectorAll);

//6. test 呼叫JS 呼叫函式若相同名字會怎麼呼叫
// showHi();

// function showHi() {
//     console.log('Hi');
// }

// function showHi(name) {
//     console.log(name + ' Hi');
// }

// showHi();

//7.1 arrow function expression syntax
// let showHi = () => {
//     console.log('Hi');
// };

// let showNameHi = (name) => {
//     console.log(name + ' says Hi!');
// };


// showHi();
// showNameHi('Tim');

//7.2 by Object
// let Tim = {
//     myWife: 'Ivy',
//     //function declaration
//     showGender() {
//         console.log('Male');
//     },
//     //default function
//     height: function (h) {
//         return h;
//     },
//     //arrow function
//     yearWest: (year) => {
//         return 1911 + year;
//     }
// };

// console.log('Tim Object', 'My wife name is ' + Tim.myWife);
// Tim.showGender();
// console.log('Tim Object', 'Height ' + Tim.height(170.5));
// console.log('Tim Object', 'yearWest is ' + Tim.yearWest(74));
//7.3 by Object had this
// let Tim2 = {
//     myWife: 'Ivy',
//     //function declaration
//     testFD_this() {
//         console.log('testFD_this', this);
//     },
//     //default function
//     testDF_this: function () {
//         console.log('testDF_this', this);
//     },
//     //arrow function
//     testAF_this: () => {
//         console.log('testAF_this', this);
//     }
// };

// Tim2.testFD_this();
// Tim2.testDF_this();
// Tim2.testAF_this();

//7.4.1 forEach
// let a = [1, 2, 3, 4];
// let b = [];
// let c = [];
// let d = [];
// let f = [];
// a.forEach(function cal(items) {
//     if (items > 1) {
//         b.push(items);
//     }
// });
// console.log(b);

// a.forEach(function (items) {
//     if (items > 1) {
//         c.push(items);
//     }
// });
// console.log(c);

// a.forEach((items, index) => {
//     if (((index + 1) % 2) === 0) {
//         d.push(items);
//     }
// });

// console.log(d);

// a.forEach(items => {
//     f.push(items);
// });

// console.log(f);

//7.4.2 map
// let d = [1, 2, 3, 4];
// let e = d.map((items) => {
//     if (items % 2 === 0) {
//         return 0;
//     }
//     else {
//         return 1;
//     }
// });

// let f = d.map((items, index) => {
//     if (items % 2 === 0) {
//         return index;
//     }
//     else {
//         return index + 1000;
//     }
// });

// let g = d.map((items, index) => {
//     if (items % 2 === 0) {
//         return index;
//     }
//     else {
//         return index + 1000;
//     }
// });


// console.log(e);
// console.log(f);







