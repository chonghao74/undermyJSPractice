//How to make a copy of an array
//e.g.1
/*
let aArray = [1, 2, 3];
let bArray = aArray;
let cArray = aArray.map((value) => {
    return value;
});
console.log("aArray is " + aArray);
console.log("bArray is " + bArray);
console.log("cArray is " + cArray);
aArray.push(5, 6);
console.log("aArray is " + aArray);
console.log("bArray is " + bArray);
console.log("cArray is " + cArray);
*/

//e.g.2
/*
let aArray = [1, 2, 3];
let bArray = aArray;
let cArray = [...aArray];
console.log("aArray is " + aArray);
console.log("bArray is " + bArray);
console.log("cArray is " + cArray);
aArray.push(5, 6);
console.log("aArray is " + aArray);
console.log("bArray is " + bArray);
console.log("cArray is " + cArray);
*/

//Ternary Operator
testTernary(10);
function testTernary(input) {
    let data = (input > 4) ? true : false;
    console.log(data);
}

//樣板字樣
let aString = "Tim";
let bString = "Tom";

let aPlusb = `${aString} and ${bString} is good freinds.`;
console.log(aPlusb);

//Floating Point
console.log((0.1 + 0.2) == 0.3);
console.log((0.1 + 0.2).toFixed(1) == 0.3.toFixed(1));

//Destructing an Object
let Tim = {
    name: 'name',
    age: 38,
    height: 169.8,
    tel: {
        home: 222,
        company: 33,
        celphone: 55
    }
}

//Old
let Tim_name = Tim.name;
let Tim_age = Tim.age;
let Tim_height = Tim.height;
let Tim_tel_home = Tim.tel.home;

console.log(`Old 作法 ${Tim_name} ${Tim_age}  ${Tim_height} ${Tim_tel_home}`);

//New
let { name, age, height } = Tim;
let { home } = Tim.tel;
console.log(`New 作法 ${name} ${age}  ${height} ${home}`);

