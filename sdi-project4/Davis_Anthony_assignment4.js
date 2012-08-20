// Anthony Davis
// SDI 1208
// Project 4

// String Functions ///

// String Function 1 - Phone number format //
function isStringPhone(number){

    var area   = new Array();
    var pre    = new Array();
    var suffix = new Array();

    var fullNumber = new Array();

    var firstDash  = number.charAt(3);
    var secondDash = number.charAt(7);

    for(i=0; i < 3; i++){
        area[i] = number.charAt(i);
        fullNumber.push(area[i]);
    };

    for(i=4; i < 7; i++){
        var n = 0;
        pre[n] = number.charAt(i);
        fullNumber.push(pre[n]);
        n++;
    };

    for(i=8; i < 12; i++){
        var n = 0;
        suffix[n] = number.charAt(i);
        fullNumber.push(suffix[n]);
    };

    if(firstDash != "-" && secondDash != "-"){
        console.log("String does not follow correct phone number format");
    };

    for(i=0; i < fullNumber.length; i++){
        console.log(fullNumber[i]);
    };

    return fullNumber;
};

// String Function 2 - email format //
function isStringEmail(){
    var someEmailString = "BrandonBambino@yahoo.com";
};