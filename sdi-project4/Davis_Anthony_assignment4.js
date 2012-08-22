// Anthony Davis
// SDI 1208
// Project 4

var myLibrary = function(){

    // String Function: Does a string follow a 123-456-7890 pattern like a phone number?
    var isPhoneNumber = function(number){
        var re = /^(\d{3})-(\d{3})-(\d{4})$/;

        if(re.test(number)){
            return true;
        }else{
            return false;
        };
    };

    // String Function: Does a string follow an aaa@bbb.ccc pattern like an email address?
    var isEmail = function(email){
        var re = /^[a-z]+@[a-z]+\.(com|net|edu|org|mobi|gov)$/;

        if(re.test(email)){
            return true;
        }else{
            return false;
        };
    };

    // This was the first function I created with regEx so I wanted to make sure you saw I understood it.
    // String Function: Is the string a URL? (Does it start with http: or https:?)
    var isURL = function(url){
        // local variable for the RegExp initialized with regExp for url format.
        // format: / starts exp and ends with /
        //         ^ signals to start search at beginning of string
        //         () means a group - search for http or https
        //         : follows http or https
        //         \/\/ then two slashes that must be escaped
        //         \S+ any single non-white space character
        //         . followed by a period which signals the domain ext used
        //         (com|net|edu|org|mobi|gov) search for this group, and can be any of the ext's in group.
        //         $ signals end of string
        //         / is the end of the expression

        var re = /^(http|https):\/\/\S+.(com|net|edu|org|mobi|gov)$/;

        // check to see if the regExp matches the url argument passed to the function
        if(re.test(url)){
            return true;
        }else{
            return false;
        };
    };

    // String Function: Title-case a string (split into words, then uppercase the first letter of each word)
    var titleCaseString = function(stringToTitleCase){
        var arrayOfStrings = stringToTitleCase.split(" ");
        var newStringArray = new Array();


        for(i=0; i<arrayOfStrings.length; i++){
            var tempStringWord = arrayOfStrings[i];
            var tempStringLetter = arrayOfStrings[i][0].charAt(0);
            var t = tempStringLetter.toLocaleUpperCase();

            var wordWithCapital = tempStringWord.replace(tempStringLetter, t );

            newStringArray[i] = wordWithCapital;

        };

        var stringWithCaps = newStringArray.join(" ");

        return stringWithCaps;
    };

    // String Function: Given a string that is a list of things separated by a given string, as well as another
        //string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
    var stringSeparator = function(fStringSep, newStringSep){
        var fStringSeparator = fStringSep.charAt(1);

        var newString = fStringSep.split(fStringSeparator).join(newStringSep);

        return newString;
    };

    // Number function: format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
    var numFormat = function(number){
        var formatNumber = number.toPrecision(4);

        return formatNumber;
    };


    // Number Function: Fuzzy-match a number: is the number above or below a number within a certain percent?
    var numFuzzyMatch = function(numFuzzy1, numFuzzy2){
        var largeNum = 0;
        var smallNum = 0;
        var diffNum;
        var greatLess;
        var percentDiff;

        if(numFuzzy1 < numFuzzy2){
            largeNum = numFuzzy2;
            smallNum = numFuzzy1;
            greatLess = "Less";
                if(!diffNum){
                  diffNum = largeNum - smallNum;
                };
        }else{
            largeNum = numFuzzy1;
            smallNum = numFuzzy2;
            greatLess = "Greater";
            if(!diffNum){
                diffNum = largeNum - smallNum;
            };
        };

        percentDiff = 100 - (smallNum/largeNum * 100);

        return [greatLess,percentDiff];

    };

    // Number Function: Find the number of hours or days difference between two dates.
    var numDaysDifference = function(date1, date2){

    };

    // Number Function: Given a string version of a number such as "42", return the value as an actual Number, such as 42.
    var convertNumStringToNum = function(numString){
        var stringToNum = parseInt(numString);

        return stringToNum;

    };

    // Array Function: Find the smallest value in an array that is greater than a given number
    var findSmallVal = function(numArray, arrayVar){
        var arrayWithValsGreaterThanArrayVar = new Array();
        var smallestArray;

        for(i=0; i<numArray.length; i++){
            if(numArray[i] > arrayVar){
                arrayWithValsGreaterThanArrayVar.push(numArray[i]);
            };
        };

        arrayWithValsGreaterThanArrayVar.sort();
        arrayWithValsGreaterThanArrayVar.pop();

        return smallestArray = arrayWithValsGreaterThanArrayVar;
    };

    // Array Function: Find the total value of just the numbers in an array, even if some of the items are not numbers.
    var totalValOfNumArray = function(mixedArray){
        var total = 0;
        var arrayString = mixedArray.join(" ");

        var numsInString = arrayString.match(/[0-9]+/gi);

        for(i=0; i<numsInString.length; i++){
            var x = parseInt(numsInString[i]);
            total += x;
        };

        return total;
    };
    /*
    // Array Function: Given an array of objects and the name of a key, return the array sorted by the value of that key
    // in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
    var sortObjectArrayByKey = function(arrayToSort){
        var sortedArray = [];

        arrayToSort.sort(function(a,b){
          sortedArray = a.a- b.b;
      });

      return sortedArray;



    }; */


    // myLibrary Return key:value
    return{
        "isURL"                 : isURL,
        "isEmail"               : isEmail,
        "isPhoneNumber"         : isPhoneNumber,
        "titleCaseString"       : titleCaseString,
        "stringSeparator"       : stringSeparator,
        "numFormat"             : numFormat,
        "numFuzzyMatch"         : numFuzzyMatch,
        "numDaysDifference"     : numDaysDifference,
        "convertNumStringToNum" : convertNumStringToNum,
        "findSmallVal"          : findSmallVal,
        "totalValOfNumArray"    : totalValOfNumArray
        //"sortObjectArrayByKey"  : sortObjectArrayByKey
    };

};

// variable for isPhoneNumber function
var phoneNumber       = "801-123-1234";

// variable for isEmail function
var email             = "bob@bob.net";

//variable for is isURL function
var url               = "https://www.somesite.com";

// variable for titleCaseString function
var stringToTitleCase = "the cat ran up the cow";

// variables for stringSeparator function
var fStringSep        = "a,b,c";
var newStringSep      = "/";

// variable for numFormat function
var number            = 19.1;

// variables for numFuzzyMatch function
var numFuzzy1         = 23;
var numFuzzy2         = 34;

// Variables for numDaysDifference variables
var date1             = 01/13/2012;
var date2             = 03/21/2011

//variable for convertNumStringToNum function
var numString         = "42";

// variable for findSmallVal function
var numArray          = new Array(1,4,5,9);
var arrayVar          = 4;

// variable for totalValOfNumArray function
var mixedArray        = new Array(2,"cat",45,"dog",23,"bird");

// variables for sortObjectArrayByKey function
var arrayToSort = [{key:'a',value:2}, {key:'a',value: 3},{key:'a', value:1}];
// end of variable declarations

var myLib = new myLibrary();

var isValidPhoneNumber = myLib.isPhoneNumber(phoneNumber);
console.log("Is " + phoneNumber + " a valid phone number: " + isValidPhoneNumber);

var isValidEmail       = myLib.isEmail(email);
console.log("Is " + email + " a valid email acccount: " + isValidEmail);

var isValidURL         = myLib.isURL(url);
console.log("Is " + url + " a valid URL: " + isValidURL);

var titleCaseString = myLib.titleCaseString(stringToTitleCase);
console.log("String before title Case: " + stringToTitleCase);
console.log("String after title case: " + titleCaseString);

var newStringNewSep = myLib.stringSeparator(fStringSep, newStringSep);
console.log("First String: " + fStringSep);
console.log("New string Separator " + newStringSep);
console.log ("First String with new separator: " + newStringNewSep);

var numWithDecimals = myLib.numFormat(number);
console.log("Number before Format: " + number);
console.log("Number after Format: " + numWithDecimals);


var fuzzyMatchedNumber = myLib.numFuzzyMatch(numFuzzy1,numFuzzy2);
console.log("Number 1: " + numFuzzy1 + " is " + fuzzyMatchedNumber[0] + " Than Number 2: " + numFuzzy2);
var percent = myLib.numFormat(fuzzyMatchedNumber[1]);
console.log("It is " + percent + " percent (%) " + fuzzyMatchedNumber[0]);

var daysDifference = myLib.numDaysDifference(date1, date2);
console.log("There are " + daysDifference + " between date 1:" + date1 + " and Date 2: " + date2);

var convertedNumString = myLib.convertNumStringToNum(numString);

var valGreaterThan = myLib.findSmallVal(numArray,arrayVar);
console.log("The smallest value in the array that is larger than " + arrayVar + " is: " + valGreaterThan);

var totalSumArray = myLib.totalValOfNumArray(mixedArray);
console.log("The sum of the elements in mixArray is: " + totalSumArray);

/*
var sortedObjectArray = myLib.sortObjectArrayByKey(arrayToSort);
console.log("unsorted array = " + arrayToSort.toSource());
console.log("Sorted array = " + sortedObjectArray);
*/
