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

    // myLibrary Return key:value
    return{
        "isURL"           : isURL,
        "isEmail"         : isEmail,
        "isPhoneNumber"   : isPhoneNumber,
        "titleCaseString" : titleCaseString,
        "stringSeparator" : stringSeparator
    };

};

var phoneNumber       = "801-123-1234";
var email             = "bob@bob.net";
var url               = "https://www.somesite.com";
var stringToTitleCase = "the cat ran up the cow";
var fStringSep        = "a,b,c";
var newStringSep         = "/";

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
