//Local Storage
(function () {
    console.log(localStorage);
    console.log(sessionStorage);
});


function tesSetLocalStorage() {
    console.log(localStorage);
    console.log(typeof localStorage);

    let testLocalStorage = localStorage;

    testLocalStorage.setItem('localName', 'Tim yu');
    testLocalStorage.setItem('localGender', 'male');
    testLocalStorage.setItem('localAdress', 'Taiwan');

    console.log(localStorage);
    console.log(localStorage.getItem('localName'));
    console.log(localStorage.getItem('localGender'));
    console.log(localStorage.getItem('localAdress'));


    // localStorage.removeItem('name');
    // testLocalStorage.clear();
    // console.log(localStorage);
    // console.log(localStorage);
}

function testRemoveLocalStorage() {
    let testLocalStorage = localStorage;
    testLocalStorage.removeItem('localName');
}

function testClearLocalStorage() {
    let testLocalStorage = localStorage;
    testLocalStorage.clear();
}

function testSetSessionStorage() {
    console.log(sessionStorage);
    console.log(typeof sessionStorage);

    let testSession = sessionStorage;

    testSession.setItem('sessionlName', 'Tim yu');
    testSession.setItem('sessionGender', 'male');
    testSession.setItem('sessionAdress', 'Taiwan');
}

function testRemoveSessionStorage() {
    let testSession = sessionStorage;
    testSession.removeItem('sessionlName');
}

function testClearSessionStorage() {
    let testSession = sessionStorage;
    testSession.clear();
}

function testObject_Array_BooleanInsertStorage() {
    let testlocalStorage = localStorage;

    let testObject = {
        'oName': 'Tim',
        'oAge': 38
    };

    let testArray = ['1', 2, '3'];

    let testBoolean = true;

    testlocalStorage.setItem('testObject', testObject);
    testlocalStorage.setItem('testArray', testArray);
    testlocalStorage.setItem('testBoolean', testBoolean);


    window.console.log(testObject);
    window.console.log(testlocalStorage.getItem('testObject'));
    window.console.log(testArray);
    window.console.log(testlocalStorage.getItem('testArray'));
    window.console.log(testBoolean);
    window.console.log(testlocalStorage.getItem('testBoolean'));

}

function testObject_Array_BooleanToJSON() {
    let testObjectJSON = {
        'oName': 'Tim',
        'oAge': 38
    }

    let testObjecyString = "{\"oName\":\"Tim\",\"oAge\":38}";
    console.log(testObjectJSON)
    console.log('testObjectJSON ' + JSON.stringify(testObjectJSON));
    console.log('testObjecttoString ' + testObjecyString);
    console.log(JSON.parse(JSON.stringify(testObjectJSON)));
    console.log('');

    let testArray = [1, 2, '3'];
    let testArrayString = "[1, 2, \"3\"]";
    console.log(testArray)
    console.log('testArray ' + JSON.stringify(testArray));
    console.log('testArrayString ' + testArrayString);
    console.log(JSON.parse(JSON.stringify(testArray)));
    console.log('');

    let testBoolean = true;
    let testBooleanString = "true";
    console.log(testBoolean)
    console.log('testBoolean ' + JSON.stringify(testBoolean));
    console.log('testBooleanString ' + testBooleanString);
    console.log(JSON.parse(JSON.stringify(testBoolean)));
}






