//Learing Codes

/* undefined, null. boolean, string, symbol, number, and object
//declare variable
var myName='Anthony';
myName=8;
let ourNmae="CodeLesson";
const pi =3.14 
//const cannot be changed 

var a;
var b = 2;
console.log(a)
a=7;
b = a;
//console.log(a);

var myStr = "I am a\"double quoted\" string inside \"double quotes\"";

var myStr1 = "<a href=\"http://www.google.com\" target=\"_blank\">Link</s>";
var myStr1 = '<a href=\"http://www.google.com\" target=\"_blank\">Link</s>';
var myStr2 = `'<a href=\"http://www.google.com\" target=\"_blank\">Link</s>'`;
*/
//console.log(myStr);
//console.log(myStr1);
//console.log(myStr2);
/***** 
 *  \' single quote
 *  \" double quote
 *  \\ backslash
 *  \n newline
 *  \r carriage return
 *  \t tab
 *  \b backspace
 *  \form feed
 * 

var myStr3 = "FirstLine\n\t\SecondLine\nThirdLine";
//console.log(myStr3);





//Example 
var ourStr = "i come first. " + "Icome second.";
var myStr4 = "This is the start" + " This is the end.";
//console.log(myStr4);

var ourStr2 = "I come first. ";
ourStr2 += "I come second.";

var myStr5 = "This is the first sentence. ";
myStr5 += "This is the second sentence.";
//console.log(myStr5);


var someAdjective = "worthwhile";
var myStr6 = "Learning to code is ";
myStr6 += someAdjective;
//console.log(myStr6);


//example finding length of a string
var firstNameLength = 0;
var firstName = "Ada"; // 0=A 1=d 3=a
firstNameLength = firstName.length;
var firstLetterofFirstName = "";
firstLetterofFirstName = firstName[0]; // zero base indexing, machie start coubting from zero



var lastNameLength = 0;
//console.log(lastNameLength);
var lastname = "Lovelace";
var firstLetterofLastName = lastname[0];
lastNameLength = lastName.length;
//console.log(lastNameLength);

//example for String Immutability
//Setup
var myStr = "Jello World";
// myStr[0] = "H"; // This will not work
myStr = "Hello World";



//Brackett Notation to Find Nth Character in String
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];

// last letter of the string

var firstword = "chrismass";
var lastletterOftheWord = word[word.length - 1];
 *****/



/** 
// example for work blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb)
{
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

console.log(wordBlanks("bike", "slow", "flew", "slowly"));
*/

//** */
// Arrays
//basic array
var ourArray = ["John", 23];//you can use commal to keey adding values and values can be of any datatypes

//Nested Arrays
var ourArray = [["the universe", 42], ["everything", 101010]];

//Access Array Data with indexes
var ourArray = [50, 60, 70];
var ourData = ourArray[0];

//Modify array with Array indexes
var ourArray = [18, 64, 99];
ourArray[1] = 45;
//console.log(ourArray);

//Access Multi-Dimensional Arrays With Indexes
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var myData = myArray[3][0];


//Manipulate Arrays with push()
var ourArray = ["Anthony", "J", "cat"];
ourArray.push(["happy", "joy"]);


//Manipulate Arrays with Pop()
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
var myArray = [["John", 23], ["cat", 2]];
var removedFrommyArray = myArray.pop();
//console.log(ourArray);
//console.log(myArray[0]);


//manipulate Arrays with shift()
var ourArray = ["Steve", "j", ["cat"]];
var removedFromOurArray = ourArray.shift();
//console.log(ourArray);
//console.log(removedFromOurArray);


//manipulate Arrays with unshift()
var ourArray = ["Steve", "j", ["cat"]];
ourArray.shift();
ourArray.unshift("happy");
//console.log(ourArray);


//Shop Listing
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2]];

function ourReusableFunction() { console.log("hello world"); }

//ourReusableFunction();

//Passing values to functions with arguments
function ourFunctionWithArgs(a, b){
    console.log(a - b);
}
//ourFunctionWithArgs(10, 5);


//Golbal scope and functions
var myGlobal = 10;
function fun1() {
    oppsGlobal = 5;// if no var key word, it becomes a global variable and can be accessed anywhere in the script.
}
function fun2()
{
    var output = "";
    if (typeof myGlobal != "undefined")
    {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oppsGlobal != "undefined")
    {
        output += "\n oopsGlobal: " + oppsGlobal
        
    }
    console.log(output);
}
//fun1();
//fun2();

//local scope and dunctions
function mylocalscope()
{
    var myVar = 5;
    console.log(myVar);

}
//mylocalscope();


//global vs local scope in functions

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}
//console.log(myOutfit());
//console.log(outerWear);


//Return a Value from a Function with Return

function minusSeven(num)
{
    return num - 7;
}

function timesFive(num)
{
    return num * 5;
}

var sum = 0;
function addThree()
{
    sum = sum + 3;
}
function addFive()
{
    sum = sum + 5;
}

//console.log(minusSeven(10));
//console.log(timesFive(7));

// Assignment with a returned value
var changed = 0;
function change(num) {
    return (num + 5) / 3;
}
changed = change(10);

var processed = 0;

function processArg(num)
{
    return (num + 3) / 5;
}

processed = processArg(7);

//console.log(changed);
//console.log(processed);

//Stand in Line datastructure

function nextInLine(arr, item)
{
    arr.push(item);
    return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];

//console.log("before: " + JSON.stringify(testArr));
//console.log(nextInLine(testArr, 6));
//console.log("After: " + JSON.stringify(testArr));

//Boolean Values , It only have two values (true and false)

function WelcomeToBooleans()
{
    //return false;
    //return true;
}

function ourTrueOrFalse(isItTrue)
{
    if (isItTrue) { // is is a variable  and an if statement can also help to check if the variable does exist
        return "Yes, It's true";
    }
    return "No, it's false";
}
//console.log(trueOrFalse(false));

function trueOrFalse(wasThatTrue)
{
    if (wasThatTrue) {
        return "yes, That was true";
    }
    return "No, that was false";
}

//console.log(trueOrFalse(true));




//Comparison with the queality Operator
function testEqual(val) {
    if (val == 12) { // a single = sign  means assignment operator and double == mean equal comparison
                    
        return "Equal";
    }
    return "Not Equal";
}
/**
 * 3 === 3   => true   
 * 3 === '3' =>false
 * 
 * == will convert type and === will not, it i scalled a strict equal
 */
//console.log(testEqual(10));



//default option in Switcg statements
function switchOfStuff(val)
{
    var answer = "";
    switch (val)
    {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
//console.log(switchOfStuff("a"));

//Multiple Identical Options in Switch Statement
function sequentialSizes(val)
{
    var answer = "";
    switch (val)
    {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        default:
            answer = "What?";
            break;
    }
    return answer;
}
//console.log(sequentialSizes(6));


//Replacing If Else Chains with Switch
function chainToSwitchBefore(val)
{
    var answer = "";


    if (val === "bob")
    {
        answer = "Marley";
    }
    else if (val === 42)
    {
        answer = "The Answer";
    }
    else if (val === 1)
    {
        answer = "There is no #1";
    }
    else if (val === 99)
    {
        answer = "Missed me by this much!";
    }
    else if (val === 7)
    {
        answer = "Ate Nine";
    }
    return answer;
}

function chainToSwitchAfter(val)
{
    var answer = "";

    switch (val) {
        
    
    case "bob":
            answer = "Marley";
            break;
    case 42:
            answer = "The Answer";
            break;
    case 1:
            answer = "There is no #1";
            break;
    case 99:
            answer = "Missed me by this much!";
            break;
    case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}
//console.log(chainToSwitchAfter(99));

//Returning Boolean Values from Functions

function isLess(a, b)
{
    if (a < b)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function isLess2(a, b)
{
    return (a < b)
  
}

//console.log(isLess(10, 15));
//console.log(isLess2(10, 15));

//Returning Early Pattern from Functions
function abTest(a, b)
{
    if (a < 0 || b < 0)
    {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
//console.log(abTest(2.1, 2));


//Counting Cards

var count = 0;
function cc(card)
{
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdbet = 'hold';
    if (count > 0)
    {
        holdbet = 'Bet'
    }
    return count +" "+ holdbet;
}

//cc(2); cc(10); cc("K"); cc('K'); cc('A');
//console.log(cc(4));

//Build Javascript Objects
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};
//console.log(myDog);

//Accessing Object Properties with Dot Notation
var testObj =
{
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//console.log(hatValue);
//onsole.log(shirtValue);

//Accessing Object Properties with space in between

var testObj =
{
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

//console.log(entreeValue);
//console.log(drinkValue);

//Accessing Object Properties with Variables
var testPbj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber=16;
var player = testPbj[playerNumber];
//console.log(player);

//Updating Object Properties
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};

myDog.name = "Happy Coder";





//Add New Prpperties to an Object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": ["Anthony","Sophie"]
};

myDog['bark']="woof!"

//console.log(ourDog);
//console.log(myDog);

//Delete Properties From an object
delete ourDog.bark;


//Using object for look ups
function phoneticLookup(val)
{
    var results = "";
    var lookup = {
        "alpha": "Adams",
        "brovo": "Boston",
        "charlie": "Chicago",
    };

    results = lookup[val];
    return results;
}
//console.log(phoneticLookup("charlie"));

//Testing Objects for Properties
var myObj = {
    gift: "a",
    pet: "b",
    bed: "c"
};

function checkObj(checkProp)
{
    if(myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    }
    else
    {
        return "Not Found"
    }
    //return "Change Me!";
}
//console.log(checkObj("gift"));


//Manipulating Complex Objects
// Ajavascript object can store flexible data
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {   
        "artist": "Anthony Zou",
        "title": "guitar Girl",
        "release_year": 2021,
        "formats": [
            "YouTube Video"
        ]
    }
];

//console.log(myMusic[0]);


//Access a javascript object
var myStorage =
{
    "car":
    {
        "inside":
        {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside":
        {
            "trunk": "jack"
        }
    }
};

var gloveBoxContent = myStorage.car.inside["glove box"];
//console.log(gloveBoxContent);


//Accessing Nested Arrays
var myPlants = [
    {
        type: "flowers",
        list:
            [
                "rose",
                "tulip",
                "dandelion"
            ]
    }
    ,
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
//console.log(secondTree);

//Record Collection
var collection = {
    "2582": {
        "album":"Slippery When",
        "artist":"Bon Jovi",
        "tracks":[
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album":"1999",
        "artist":"Prince",
        "tracks":[
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245":{
        "artist":"Robert Palmer",
        "tracks":[ ]
    },
    "5439":{
        "album": "ABBA Gold"
    }  
};
//keep acopy if the collection for test
var collectionCopy =JSON.parse(JSON.stringify(collection));

function updateRecords(id,prop,value){
    if(value === "")
    {
     delete collection[id][prop];    
    }
    else if(prop === "tracks")
    {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else
    {
        collection[id][prop]=value;
    }
    return collection;
}
updateRecords(2468,"tracks","test");
console.log(updateRecords(5439,"artist","ABBA"));


//Project code