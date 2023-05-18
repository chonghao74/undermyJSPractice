//1.Document
//console.log(document);
//1.1 getElementById, getElementsByClassName
// let h1 = document.getElementById('first');
// let P1 = document.getElementsByClassName('second');
// console.log(h1);
// console.log(P1);

//2 createElement
// let addElement = document.createElement('h1');

//3 document.querySelector(), document.querySelectorAll()
// let H1TagQuery = document.querySelector('H1');
// let H1TagIdQuery = document.querySelector('H1#first');
// let H1TagClassOneQuery = document.querySelector('H1.second');
// let ClassOneQuerySelector = document.querySelector('.second');
// let TagQuerySelectorAll = document.querySelectorAll('H1');
// let ClassQuerySelectorAll = document.querySelectorAll('.second');

// console.log(H1TagQuery);
// console.log(H1TagIdQuery);
// console.log(H1TagClassOneQuery);
// console.log(ClassOneQuerySelector);
// console.log(H1TagClassOneQuery);
// console.log(ClassQuerySelectorAll);

// for (let value of ClassQuerySelectorAll) {
//     console.log(value);
// }

// ClassQuerySelectorAll.forEach((value, index) => {
//     console.log(value);
// })

//4 arrow function expression syntax
// let showHi = () => {
//     console.log('Hi');
// };

// let showNameHi = name => {
//     console.log(name + ' says Hi!');
// };

// showHi();
// showNameHi('Tim');

//5 this Keyword Test
//normal
// console.log(this);
//normal func
// (function () {
//     console.log(this);
// })();
//arrow func
// (() => {
//     console.log(this);
// })();

// let objectTest = {
//     myName: "Tim",
//     getNameNormalFunc() {
//         console.log(this);
//     },
//     getNameArrowFun: () => {
//         console.log(this);
//     }
// }

// objectTest.getNameNormalFunc();
// objectTest.getNameArrowFun();


//6 forEach、map
//forEach
// let aArray = [1, 2, 3, 4];
// aArray.forEach((value) => value * 2);
// console.log('forEach');
// console.log(aArray);
//map
// let mapaArray = aArray.map((value) => value * 2);
// console.log('map');
// console.log(mapaArray);
//若要 forEach 做到 map 的事情，就要先宣告一個 空矩陣
// let bArray = [];
// aArray.forEach((value) => {
//     bArray.push(value * 2);
// });
// console.log('要 forEach 做到 map 的事情');
// console.log(bArray);

//7 Array、HTMLCollection、NodeList
// let testArray = [1, 2, 3];
// //HTMLCollection
// let htmlCollec = window.document.getElementsByClassName('second');
// //NodeList
// let nodeList = document.querySelectorAll('.second');

// console.log(testArray);
// console.log(htmlCollec);
// console.log(nodeList);

//8 Element Object
//8.1 children、childNode
// console.log(document.querySelector('body'));
// let sec1Element = document.querySelector("section#sec1_child");
// console.log(sec1Element);
// console.log(sec1Element.children);
// console.log(sec1Element.childNodes);
//8.2 parentElenment
// let pElement = document.querySelector('section#sec2_parent p');
// console.log(pElement);
// console.log(pElement.parentElement);
// console.log(pElement.parentElement.parentElement);
//8.3 innerHTML、innerText
// let a1HTML = document.querySelector('#sec3_inner #a1_html');
// let a1Text = document.querySelector('#sec3_inner #a1_text');
// let a2HTML = document.querySelector('#sec3_inner #a2_html');
// let a2Text = document.querySelector('#sec3_inner #a2_text');
// a1HTML.innerHTML = 'aHTML';
// a1Text.innerText = 'aText';
// a2HTML.innerHTML = "<img src ='../photos/js.png'></img>"
// a2Text.innerText = "<img src ='../photos/js.png'></img>";

// let H1HTML = document.querySelector('#sec3_inner H1');
// let setIntervalData;
// let count = 0;
// function setIntervalGo() {
//     clearInterval(setIntervalData);
//     setIntervalData = setInterval(() => {
//         count++
//         H1HTML.innerHTML = count;
//     }, 1000);
// }


// function clearIntervalGo() {
//     clearInterval(setIntervalData);
// }

//9 appendElement
// function appendChildTest() {
//     let section = document.querySelector('section#sec4_append');
//     let h1Tag = document.createElement('h1');
//     h1Tag.innerHTML = "I'm a super Hero. ";
//     section.appendChild(h1Tag);
// }


//10 classList
// let pTag1 = document.querySelector('section#sec4_classList p#test_p1');
// let pTag2 = document.querySelector('section#sec4_classList p#test_p2');
// console.log(pTag1.classList);

// function classList_Add() {
//     pTag2.classList.add("test_classlist_method");
// }
// function classList_Remove() {
//     pTag2.classList.remove("test_classlist_method");
// }
// function classList_Toggle() {
//     pTag2.classList.toggle("test_classlist_method");
// }
// function classList_Contain() {
//     if (pTag2.classList.contains("test_classlist_method")) {
//         window.alert("有此 css class");
//     }
//     else {
//         window.alert("沒有此 css class");
//     }
// }

//11 getAttribute
// let aTag = document.querySelector('section#sec5_getAttribute a');
// console.log(aTag);
// let href = aTag.getAttribute('href');
// let target = aTag.getAttribute('target');
// console.log("aChor Tag : href=" + href + " target=" + target);

//12 Tag.querySelector、 Tag.querySelectorAll
// let sec6_querySelector = document.querySelector("section#sec6_querySelector");
// let documentSection = document.querySelectorAll("section");
// let tagSection = sec6_querySelector.querySelectorAll("section");

// console.log(sec6_querySelector);
// console.log(documentSection);
// console.log(tagSection);

//13 remove
// let html = document.querySelector("html");
// html.remove();







