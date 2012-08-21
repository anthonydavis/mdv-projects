// Anthony Davis
// SDI 1208
// Project 3


// Global Variables
var intro = "Brandon Bambino finally made it to the gym!!! ";
var friends = ["kevin", "troy", "lewis"];
var response = false;

// module pattern
var profile = function(name){
    // local variables
    var name = name;
    var bodyParts = ["chest","back","shoulders","legs","arms"];

    // procedural function - does math and outputs years training
    var outputYearsTraining = function(){
        // local variables
        var ageStart = 18;
        var ageNow   = 30;
        var yearsTraining = ageNow - ageStart;

        return yearsTraining;
    };

    // function to find response to personal training sign up - return boolean
    var wantToSignUp = function(response){
        if(!response){
            return response;
        };
    };


    // return object w/ key : value (boolean, array, number, string) w methods (procedure, function, accessor, mutator)
    return {
        "name"                : name,
        "outputYearsTraining" : outputYearsTraining,
        "bodyParts"           : bodyParts,
        "wantToSignUp"        : wantToSignUp
    };

};

// accessor function
var getFavoriteBodyPart = function(){
    for(i = 0; i < brandonProfile.bodyParts.length; i++){
        if(brandonProfile.bodyParts[i] === "arms"){
            var favoriteBodyPart = brandonProfile.bodyParts[i];
        };
    };

    return favoriteBodyPart;

};

var printStory = function(intro, brandonProfile){

    var hisResponse = brandonProfile.wantToSignUp(response);
    var yearsTraining = brandonProfile.outputYearsTraining();

    console.log(intro);
    console.log("To his surprise one of the trainers wants to give him a free session, but first he must create a profile for him.");
    console.log("After some lengthy questions, the trainer puts together a profile.");
    console.log("From the information Brandon Bambino provided, here is his profile:");
    console.log("   " + "Name: " + brandonProfile.name);
    console.log("   " + "Years Training: " +  yearsTraining);
    console.log("   " + "Favorite Bodypart: " + brandonProfile.getFavoriteBodyPart());
    console.log("Brandon knew there would be a catch, after the profile was created he was pitched personal Training.");

    if(!hisResponse){
        var answer = "No Thanks";
    };

    console.log("After the trainer was done talking he asked Brandon if he wanted to sign up, his response was: " + answer);
    console.log("The Trainer asked Brandon if he wanted to list any friends as possible referrals, these are the names he listed:" );

    var referral = function(friends){
        // does he have friends to referr?
        if(friends){
            return friends;
        }
    };

    var referrals = referral(friends);

    var n = 0;
    while(n < referrals.length){
        for(i = 0; i < referrals.length; i++){
          console.log("   " + referrals[i]);
        };

        break;


    };

    console.log("To be continued....");

}

var brandonProfile = profile("Brandon");

printStory(intro,brandonProfile);














