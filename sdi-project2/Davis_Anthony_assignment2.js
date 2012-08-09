var $gym = "Golds";
var hrsOfWorkout = "2";
var $offDay = ["sunday"];
var $onDay = ["monday", "tuesday", "wednesday", "thursday", "friday"];
var $bodyPart = ["chest", "back", "shoulders", "legs", "arms"];

// workOutToday($dayOff);

intro($gym);

workOut($offDay, $onDay);

function intro($gym)
{
    if(!$gym)
    {
        console.log("Brandon Bambino forgot the name of his gym, so he can't go workout today");
    } else {
        console.log("Brandon Bambino needed to go to " + $gym + " gym, but he couldn't decide which bodypart to workout.")
    };

};

function workOut( $offDay, $onDay )
{
    if( $onDay[0] == "monday" || $onDay[1] == "tuesday" && $onDay[2] == "wednesday" && $onDay[3] == "thursday" || !$onDay[0] == "sunday" )
    {
        console.log( "He first decided to check his workout log and make sure today was a day off from the gym or not, and it looks like he needs to go" );
    }else
     {
        console.log( "He first decided to check his workout log and make sure today was a day off from the gym or not, and it looks like he gets to rest for the day" );
     };

};

