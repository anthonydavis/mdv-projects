// Anthony Davis
// SDI 1208
// Project 4

var myLibrary = function(){

    // String Function: Does a string follow a 123-456-7890 pattern like a phone number?




    // String Function: Does a string follow an aaa@bbb.ccc pattern like an email address?

    // String Function: Is the string a URL? (Does it start with http: or https:?)
    var isURL = function(url){
        // local variable for the RegExp instantiated with regExp for url format.
        // format: / starts exp and ends with /
        //         ^ signals to start search at beginning of string
        //         () means a group - so search for http or https
        //         : follows http or https
        //         \/\/ then two slashes that must be escaped
        //         \S+ any single non-white space character
        //         . followed by a period which signals the domain ext used
        //         (com|net|edu|org|mobi|ca|co|gov) search for this group, and can be any of the ext's in group.
        //         $ signals end of string
        //         / is the end of the expression

        var re = /^(http|https):\/\/\S+.(com|net|edu|org|mobi|ca|co|gov)$/;

        // check to see if the regExp matches the url argument passed to the function
        if(re.test(url)){
            return true;
        }else{
            return false;
        };

    };

    // String Function: Title-case a string (split into words, then uppercase the first letter of each word)

    // String Function: Given a string that is a list of things separated by a given string, as well as another
        //string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

    // myLibrary Return key:value
    return{
        "isURL":isURL
    };

};

var url = "https://www.somesite.com";
var myLib = new myLibrary();

var validURL = myLib.isURL(url);
console.log(validURL);