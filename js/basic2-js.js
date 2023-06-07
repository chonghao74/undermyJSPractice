//Hosting ************************************************************************
//Global
/*
console.log(x);
sayHi();
console.log(y);
console.log(z);
go();

var x = 10;
function sayHi() {
    console.log("Hi");
}

let y = 10;
const z = 10;
let go = (() => {
    console.log("go");
})

console.log(varHoisitig);
console.log(letHoisitig);
var varHoisitig = "1";
let letHoisitig = "1";

let btn_testHoisting = document.querySelector("section button#testHoisting");
window.addEventListener("click", () => {
    alert("Click Windows");
})
btn_testHoisting.addEventListener("click", e => {
    testFunctionHoisting(e);
});

function testFunctionHoisting(e) {
    e.stopPropagation();
    console.log(varHositig);
    console.log(letHositig);
    var varHositig = "1";
    let letHositig = "1";
}
*/

//block Scope ************************************************************************
/*
if (true) {
    var ff = 0;
    console.log("block " + ff);
}

(function go() {
    console.log("function " + ff);
})();

console.log("global " + ff);
*/

//construction function, class *************************************************************
/*
function Person1(myName, myAge) {
    this.myName = myName;
    this.myAge = myAge;
    this.run = (loop) => {
        console.log(this.myName + " run " + loop);
    };
}
class Person2 {
    constructor(myName, myAge) {
        this.myName = myName;
        this.myAge = myAge;
    }

    run(loop) {
        console.log(this.myName + " run " + loop);
    }
}

let Tim = new Person1("Tim", 30);
let Tom = new Person2("Tom", 25);
let God1 = new Object();
let God2 = new Object();
God1.run = Tim.run;
God2.run = Tom.run;

Tim.run(10);
Tom.run(20);
God1.run(30);
God2.run(30);
*/

//Prototype ************************************************************************
/*
function PersonPrototypeFun(iniName) {
    this.name = iniName;
    this.sayHi = function () {
        console.log(this.name + " Say Hi !");
    }
}
class PersonPrototype {
    constructor(iniName) {
        this.name = iniName;
    }

    sayHi() {
        console.log(this.name + " Say Hi !");
    }
}

PersonPrototypeFun.prototype.sayHiPrptotype = () => {
    console.log(this.name + " Say Hi !");
}

PersonPrototype.prototype.sayHiPrptotype = function () {
    console.log(this.name + " Say Hi !");
}

let TimFun = new PersonPrototypeFun("TimFun");
let TomFun = new PersonPrototypeFun("TomFun");
let Tim = new PersonPrototype("Tim");
let Tom = new PersonPrototype("Tom");

console.log(TimFun.sayHi === TomFun.sayHi);
console.log(TimFun.sayHiPrptotype === TomFun.sayHiPrptotype);
console.log(Tim.sayHi === Tom.sayHi);
console.log(Tim.sayHiPrptotype === Tom.sayHiPrptotype);
*/

//Function Advance - bind, call, apply **************************************************
//bind
/*
class Person {
    constructor(iniName, iniAge) {
        this.name = iniName;
        this.age = iniAge;
    }
}

function addNumber(a, b) {
    console.log(a + b);
}

function addNumberWho(a, b) {
    console.log(this.name + " cal a plus b is " + (a + b));
}

let testBindNonThisNonParameter = addNumber.bind(null);
let testBindNonThisOneParameter = addNumber.bind(null, 10);
let testBindNonThisAllParameter = addNumber.bind(null, 10, 20);
testBindNonThisNonParameter(10, 20);
testBindNonThisOneParameter(20);
testBindNonThisAllParameter();

let Tim = new Person("Tim", 38);

let testBindThisNonParameter = addNumberWho.bind(Tim);
let testBindThisOneParameter = addNumberWho.bind(Tim, 10);
let testBindThisAllParameter = addNumberWho.bind(Tim, 10, 20);
testBindThisNonParameter(10, 20);
testBindThisOneParameter(20);
testBindThisAllParameter();
*/

//call, apply
/*
class Person {
    constructor(iniName, iniAge) {
        this.name = iniName;
        this.age = iniAge;
    }
}

function addNumber(...a) {
    let count = 0;
    for (let data of a) {
        count += data;
    }
    console.log(count);
}

function addNumberWho(...a) {
    let count = 0;
    for (let data of a) {
        count += data;
    }
    console.log(this.name + " cal is " + count);
}

addNumber.call(null, 10, 20);
let Tim = new Person("Tim", 20);
addNumberWho.call(Tim, 10, 20);

addNumber.apply(null, [10, 20, 30, 40]);
*/

//Inheritance **********************************************************************************
//構造函示1-expression 
/*
let Person = function (name, age, height, weight) {
    this.name = name,
        this.age = age,
        this.height = height,
        this.weight = weight
}

Person.prototype.sayHi = function () {
    console.log(this.name + " say Hi!");
}

let Oilver = new Person("Oilver", 6, 107, 16);
Person.prototype.address = "Taipei";

Oilver.sayHi();
console.log(Oilver.address);
*/


//構造函示-normal
/*
function Person(name, age, height, weight) {
    this.name = name,
        this.age = age,
        this.height = height,
        this.weight = weight
}

Person.prototype.sayHiArrow = () => {
    console.log(this.name + " say Hi! (構造函示 Arrow)");
}

Person.prototype.sayHiNormal = function () {
    console.log(this.name + " say Hi! (構造函示 Normal)");
}

function Student(name, age, height, weight, number) {
    //this is Student
    Person.call(this, name, age, height, weight);
    this.number = number;
    console.log(this.name)
}

//Tim.sayHi(); //會出錯因為 Person.call 是執行 function Persom 但原生內部是沒有 prototype
//要執行有兩種方法
//1 於 新物件 自行加入索要函示 -> 但若有 100個函式，故不建議
//2 於新物件 的 prototype 加入 父構造函示 的 prototype
Student.prototype = Object.create(Person.prototype);

let Tim = new Student("Tim", 18, 175, 68, 01);
console.log(Tim);
Tim.sayHiArrow();
Tim.sayHiNormal();
*/
//類別
/*
class PersonClass {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }

    sayHiNormalInner() {
        console.log(this.name + " say Hi! (Class Normal Inner)");
    }
}

class StudentClass extends PersonClass {
    constructor(name, age, height, weight, number) {
        super(name, age, height, weight, number);
        this.number = number;
    }
}

PersonClass.prototype.sayHiArrow = () => {
    console.log(this.name + " say Hi! (Class prototype Arrow)");
}

PersonClass.prototype.sayHiNormal = function () {
    console.log(this.name + " say Hi! (Class prototype Normal)");
}

let Tom = new StudentClass("Tom", 18, 175, 68, 02)
console.log(Tom);
Tom.sayHiArrow();
Tom.sayHiNormal();
Tom.sayHiNormalInner();
*/

//Static **********************************************************************************
/*
class Circle {
    static pi3 = 3.141;//static property
    constructor(radius) {
        this.radius = radius
        this.pi = 3.1;
    }

    getArea() {
        console.log(2 * Math.PI * this.radius);
        console.log(2 * this.pi * this.radius);
        console.log(2 * Circle.pi3 * this.radius);//use static property
    }

    //use static method
    static showFormula() {
        console.log("r * r * PI");
    }
}

Circle.showFormula();//use static method
(new Circle(10)).getArea();
*/


//Promises
function checkPromisesSupport() {
    window.alert(window.Promise);
}

