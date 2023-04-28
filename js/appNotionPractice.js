//Practice1-Fib 費波那契數 演算法
//作法
function fib(n) {
    let a = [0, 1];

    if (n == 0) {
        a = [0];
    }
    else {
        while (a.length <= n) {
            let b = a.length;
            a.push(a[b - 1] + a[b - 2]);
        }
    }

    console.log(a);
    console.log(a[a.length - 1]);
}

// fib(0);
// fib(1);
// fib(2);

//Practice2-找到矩陣中第 N 的最小值
let Aarray = [-1, 0, 1, -2, 5, 6, -10];
let Barray = [1, 5, 3, 7, 9];
//作法1 
//1.1.先做重新排序 Tim
function findThNSmaill(ff) {
    let aaa = [];
    for (i = 0; i < ff.length; i++) {
        if (i == 0) {
            aaa.push(ff[i])
        }
        else {
            let c = [];
            let yesGOGO = false;
            for (j = 0; j < aaa.length; j++) {
                if (!yesGOGO) {
                    if (aaa[j] > ff[i]) {
                        c.push(ff[i]);
                        c.push(aaa[j]);
                        yesGOGO = true;
                    } else {
                        c.push(aaa[j]);
                        if (j == aaa.length - 1) {
                            c.push(ff[i]);
                        }
                    }
                }
                else {
                    c.push(aaa[j]);
                }

            }
            aaa = c;
        }
    }

    console.log(aaa);
    return aaa;
}
//1.2.再做找出第幾小 Tim
function smaillN(arrayInput, NumberN) {
    if (arrayInput.length < NumberN) {
        console.log('fail')
    }
    else {
        console.log(arrayInput[NumberN - 1])
    }
}


//作法2
function findThNSmaill2(arr, N) {
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                count++;
            }
        }

        if (count == N - 1) {
            console.log('此[' + arr + ']矩陣排第' + N + '小的值為', arr[i]);
            break;
        }
    }
}

// let BBB = findThNSmaill(Aarray);
// smaillN(BBB, 7);

// findThNSmaill2(Aarray, 7);

//Practice3-排序由小到大
// let Carray = [17, 0, -3, 2, 1, 0.5];
// let CCC = findThNSmaill(Carray);
//作法1 為 1.1.先做重新排序 Tim
//作法2 
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

function makeSort(arr) {
    let sorArr = [];

    while (arr.length > 0) {
        let min = findMin(arr);
        sorArr.push(min);

        arr.splice(arr.indexOf(min), 1);
    }

    console.log('My', sorArr);
}
// makeSort(Carray);
//作法3 
//透過 Sort 但Sort 是轉換 Unicode故須增加 function compareNumbers (a,b)
//為了比較數字而不是字串，比較函式可以僅僅利用 a 減 b。以下函式將會升冪排序陣列
// console.log(Carray.sort((a, b) => {
//     return a - b;
// }));


//Practice4-判斷是否是 prime 質數
function isPrime(n) {
    if (n === 0 || n === 1) {
        return false;
    }
    else {
        let numberData = 2;
        while (numberData < n) {
            if ((n % numberData) === 0) {
                return false;
            }
            numberData++;
        }

        return true;

    }
}

// console.log('2 是否是質數 ', isPrime(2));
// console.log('7 是否是質數 ', isPrime(7));
// console.log('371 是否是質數 ', isPrime(371));



//Practice5-輸入兩組字串，判斷第二組字串是否於結尾
function findConfirmEnding(aStr, bStr) {
    let aArray = aStr.split(' ');
    let count = bStr.length;
    let aEndString = '';

    while (count != 0) {
        aEndString += aStr[aStr.length - count];
        count--;
    }

    if (aEndString === bStr) {
        return true
    }
    else {
        return false;
    }
}

// console.log('Bastisan,n', findConfirmEnding('Bastisan', 'n'));
// console.log('Connor,n', findConfirmEnding('Connor', 'n'));
// console.log('Open seasame,same', findConfirmEnding('Bastisan', 'n'));


//Practice6-判斷是否有重複值
function checkDuplicate(arr, numberData) {
    if (arr.length == 0) {
        return false;
    }

    let isDuplicate = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === numberData) {
            isDuplicate = true;
            break;
        }
    }

    return isDuplicate;
}

// console.log('[1,3,5,7,9] 是否有3', checkDuplicate([1, 3, 5, 7, 9], 3));
// console.log('[] 是否有3', checkDuplicate([], 3));
// console.log('[3,4,5,6,7,100000] 是否有0', checkDuplicate([3, 4, 5, 6, 7, 100000], 0));

//Practice7-判斷是否是 pailindrom 順讀你讀都一樣
function isPailindrom(strData) {

    let strSplit = strData.toLowerCase().split('');
    let result = true;

    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i] === strSplit[strSplit.length - 1 - i]) {
            continue
        }
        else {
            result = false;
            break;
        }
    }

    return result;
}

// console.log('bearaeb', isPailindrom('bearaeb'));
// console.log('Whatever revetahw', isPailindrom('Whatever revetahw'));
// console.log('Aloha, how are you today?', isPailindrom('Aloha, how are you today?'));


function pyramid(n) {
    let showStr = '';
    for (let i = 1; i <= n; i++) {
        let h = 0;
        let e = 0;

        while (n - i > h) {
            showStr += ' ';
            h++
        }

        for (let j = 0; j < (i * 2 - 1); j++) {
            showStr += '*';
        }

        while (n - i > e) {
            showStr += ' ';
            e++;
        }

        showStr += '\n';
    }

    return showStr;
}

function inversePyramid(n) {
    let showStr = '';
    for (let i = n; i > 0; i--) {
        let h = 0;
        let e = 0;

        while (n - i > h) {
            showStr += ' ';
            h++
        }

        for (let j = 0; j < (i * 2 - 1); j++) {
            showStr += '*';
        }

        while (n - i > e) {
            showStr += ' ';
            e++;
        }

        showStr += '\n';
    }

    return showStr;
}

// console.log(pyramid(1));
// console.log(pyramid(4));
// console.log(pyramid(5));
// console.log(inversePyramid(5));
// console.log(inversePyramid(4));
// console.log(inversePyramid(1));  


let alreadyDrink = 0;
let a = [1, 2, 3, 4];
let drinkWaterImpure = (water) => alreadyDrink += water;
let b = (data) => { a.push(data); }


console.log(drinkWaterImpure(1));
console.log(b(1));


function Person(nameData) {
    this.name = nameData
}

Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name);
    },
    toString: function () {
        return "[Person " + this.name + "]";
    }
}


let Tim = new Person("Tim");
window.console.log(Tim.prototype);
console.log(Tim.constructor);
Tim.prototype.sayName;

// if (Tim.constructor === Person)
