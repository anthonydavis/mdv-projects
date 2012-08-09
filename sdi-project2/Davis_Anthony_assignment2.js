var $gym = "Golds";
var hrsOfWorkout = "2";
var $offDay = false;
var $onDay = true;
var $bodyPart = ["chest", "back", "shoulders", "legs", "arms"];

// workOutToday($dayOff);

intro($gym);

function intro($gym)
{
    if(!$gym)
    {
        console.log("Brandon Bambino forgot the name of his gym, so he can't go workout today");
    } else {
        console.log("Brandon Bambino needed to go to " + $gym + " gym, but he couldn't decide which bodypart to workout.")
    };

};

