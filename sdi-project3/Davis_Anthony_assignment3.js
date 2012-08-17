// Anthony Davis
// SDI 1208
// Project 3


// Global Variables
var intro = "Brandon Bambino finally made it to the gym!!! ";

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

    // accessor function
    var getFavoriteBodyPart = function(){
        for(i = 0; i < brandonProfile.bodyParts.length; i++){
            if(brandonProfile.bodyParts[i] === "arms"){
                var favoriteBodyPart = brandonProfile.bodyParts[i];
            };
        };

        return favoriteBodyPart;

    };

    // mutator function


    // return object w/ key : value (boolean, array, number, string) w methods (procedure, function, accessor, mutator)
    return {
        "name"                : name,
        "outputYearsTraining" : outputYearsTraining,
        "bodyParts"           : bodyParts,
        "getFavoriteBodyPart" : getFavoriteBodyPart
    };

};

console.log(intro);
console.log("To his surprise one of the trainers wants to give him a free session, but first he must create a profile for him.");
console.log("After some lengthy questions, the trainer puts together a profile.");

var brandonProfile = profile("Brandon");
var yearsTraining = brandonProfile.outputYearsTraining();

console.log("From the information Brandon Bambino provided, here is his profile:");
console.log("   " + "Name: " + brandonProfile.name);
console.log("   " + "Years Training: " +  yearsTraining);

// function to get favorite bodypart
var getFavoriteBodyPart = function(){


    for(i = 0; i < brandonProfile.bodyParts.length; i++){
        if(brandonProfile.bodyParts[i] === "arms"){
            var favoriteBodyPart = brandonProfile.bodyParts[i];
        };
    };

    return favoriteBodyPart;

};

console.log("   " + "Favorite Bodypart: " + brandonProfile.getFavoriteBodyPart());


