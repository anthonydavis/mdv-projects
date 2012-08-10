var $gym = "Golds";
var $numCupcakes = 3;
var $offDay = ["sunday"];
var $onDay = ["monday", "tuesday", "wednesday", "thursday", "friday"];
var $bodyPart = ["chest", "back", "shoulders", "legs", "arms"];
var $saying1 = "light weight!";
var $saying2 = "baby!";

intro($gym);

var $goToGym = workOut($offDay, $onDay);

var totalHrsCardio = amtOfCardio($numCupcakes);

var $saying = createSaying($saying1, $saying2);



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
        return true;
    }else
     {
        console.log( "He first decided to check his workout log and make sure today was a day off from the gym or not, and it looks like he gets to rest for the day" );
         return false;
     };

};

function amtOfCardio($numCupcakes)
{
    var $cardio = 0;
    var $totalCardio = 0;


    console.log( "For everycupcake he ate today, he will need to do more cardio. He ate: " + $numCupcakes + " So he will need to burn: " );
    while($cardio < $numCupcakes)
    {
        $totalCardio += 600;
        console.log( $totalCardio + " calories");
        $cardio++;

    };

    return $totalCardio;
};

function createSaying($saying1, $saying2)
{
    var $completeSaying = $saying1 + " " + $saying2;
    return $completeSaying;
};