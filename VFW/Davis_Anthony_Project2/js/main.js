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

    // Find value of Selected radio button
    function getSelectedRadio(){
        var radio = document.forms[0].condition;

        for(var i= 0, j=radio.length; i<j; i++){
            if(radio[i].checked){
                conditionValue = radio[i].value;
            }
        }
    }

    function storeData(){
        var id  = Math.floor(Math.random()*100000001);

        getSelectedRadio();
        // Gather form field data and store in an object
        // object properties will contain an array with form label and input value
        var item            = {};
            item.category   = ["Style Category:", $("category").value];
            item.dateAdded  = ["Date Added to List:", $("dateAdded").value];
            item.artistName = ["Artist Name:", $("artistName").value];
            item.albumTitle = ["Album Title:", $("albumTitle").value];
            item.numCopies  = ["Number of Copies:", $("numCopies").value];
            item.condition  = ["Condition of Record:", conditionValue];
            item.notes      = ["Notes:", $("notes").value];

        // save data into local storage: use Stringify to convert our object to a string
        localStorage.setItem(id, JSON.stringify(item));
        alert("Record Added to List");
    }



    // Write data from local storage to the browser
    function getData(){
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement("ul");
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);

        for(var i= 0, j=localStorage.length; i<j; i++){
            var makeLi = document.createElement("li");
            makeList.appendChild(makeLi);
            var key         = localStorage.key(i);
            var value       = localStorage.getItem(key);

            // convert value string from local storage back into object
            var obj         = JSON.parse(value);
            var makeSubList = document.createElement("ul");
            makeLi.appendChild(makeSubList);

            var addBreak = document.createElement("br");
            makeList.appendChild(addBreak);

            for(var n in obj){
                var makeSubLi = document.createElement("li");
                makeSubList.appendChild(makeSubLi);
                var optSubText = obj[n][0] + " " + obj[n][1];
                makeSubLi.innerHTML = optSubText;
            }
        }
    }

    // Variable defaults
    var musicCategory = ["--Choose A style Category--", "80\'s", "Classical", "Country", "Metal", "Rap", "Rock"];
    var conditionValue;
    makeCats();

    // Set Link & Submit Click Events


    var displayLink = $("displayLink");
    displayLink.addEventListener("click", getData);

    /*var clearLink = $("clearLink");
    clearLink.addEventListener("click", clearData);*/

    var submitButton = $("submitButton");
    submitButton.addEventListener("click", storeData);
});

