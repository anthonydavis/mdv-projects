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

    // Create select field element and populate it with options
    function makeCats(){
        var formTag     = document.getElementsByTagName("form"), // formTag is an array of all the form tags
            selectLi    = $("select"),
            makeSelect  = document.createElement("select");
            makeSelect.setAttribute("id", "category");

        for(var i=0, j=musicCategory.length; i<j; i++){
            var makeOption  = document.createElement("option");
            var optText     = musicCategory[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);

    }

    // Variable defaults
    var musicCategory = ["--Choose A style Category--", "80\'s", "Classical", "Country", "Metal", "Rap", "Rock"];
    makeCats();

    // Set Link & Submit Click Events
    var displayLink = $("displayLink");
    displayLink.addEventListener("click", getData);

    var clearLink = $("clearLink");
    clearLink.addEventListener("click", clearData);

    var submitButton = $("submitButton");
    submitButton.addEventListener("click", storeData);




});

