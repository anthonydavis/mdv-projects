/**
 *
 * Name: Anthony Davis
 * Class: VFW
 * Term: 1209
 * Project: Web App Part 2
 *
 **/

// Wait until Dom is ready
window.addEventListener("DOMContentLoaded", function(){

    // getElementByID function
    function $(x){
        var theElement = document.getElementById(x);

        return theElement;
    }

    // Variable defaults
    var musicCategory = ["--Choose A style Category--", "80\'s", "Classical", "Country", "Metal", "Rap", "Rock"];

    // Set Link & Submit Click Events
    var displayLink = $("displayLink");
    displayLink.addEventListener("click", getData);

    var clearLink = $("clearLink");
    clearLink.addEventListener("click", clearData);

    var submitButton = $("submitButton");
    submitButton.addEventListener("click", storeData);




});

