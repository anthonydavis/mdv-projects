/**
 *
 * Name: Anthony Davis
 * Class: VFW
 * Term: 1209
 * Project: Web App Part 3
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

    function toggleControls(n){
        switch(n){
            case "on":
                $("newRecord").style.display = "none";
                $("clearLink").style.display = "inline";
                $("displayLink").style.display = "none";
                $("addNewLink").style.display =  "inline";
                $("h2Id").innerText = "Current Records in List";

                break;
            case "off":
                $("newRecord").style.display = "block";
                $("clearLink").style.display = "inline";
                $("displayLink").style.display = "inline";
                $("addNewLink").style.display =  "none";
                $("items").style.display = "none";
                break;
            default:
                return false;
        }
    }

    // Write data from local storage to the browser
    function getData(){

        if(localStorage.length ===0){
            alert("There is No Data To Display");
            return false;
        }

        toggleControls("on");

        if(localStorage.length ===0){
            alert("There is No Data To Display");
        }

        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement("ul");
        var appendDiv = document.getElementById("addBody");
        makeDiv.appendChild(makeList);
        // document.body.appendChild(makeDiv);
        appendDiv.appendChild(makeDiv);
        $("items").style.display = "block";

        for(var i= 0, j=localStorage.length; i<j; i++){
            var makeLi       = document.createElement("li");
            var linksLi      = document.createElement("li");
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
                makeSubLi.appendChild(linksLi);

            }
            makeItemLinks(localStorage.key(i), linksLi); // Create edit and delete buttons/link for each item in local storage
        }
    }

    // Make Item Links
    // Create the edit and delete links for each stored item when displayed
    function makeItemLinks(key, linksLi){
    // add edit single item link
        var editLink = document.createElement("a");
        editLink.href = "#";
        editLink.key = key;
        var editText = "Edit Record Entry";
        editLink.addEventListener("click", editItem);
        editLink.innerHTML = editText;
        linksLi.appendChild(editLink);

        // add a line break
        var breakTag = document.createElement("br");
        linksLi.appendChild(breakTag);

    // add delete single item link
        var deleteLink = document.createElement("a");
        deleteLink.href = "#";
        deleteLink.key = key;
        var deleteText = "Delete Record Entry";
       // deleteLink.addEventListener("click", deleteItem);
        deleteLink.innerHTML = deleteText;
        linksLi.appendChild(deleteLink);

    }

    // EditItem function
    function editItem(){
        // grab the data from local storage
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);

        // show form so we can edit item
        toggleControls("off");

        // populate form fields with current local storage values
        $('category').value     = item.category[1];
        $("dateAdded").value    = item.dateAdded[1];
        $("artistName").value   = item.artistName[1];
        $("albumTitle").value   = item.albumTitle[1];
        $("numCopies").value    = item.numCopies[1];
        var radios              = document.forms[0].condition;


        for(var i=0; i<radios.length; i++){
            if(radios[i].value == "Good" && item.condition[1] == "Good" ){
                radios[i].setAttribute("checked", "checked");
            }else if(radios[i].value == "Ok" && item.condition[1] == "Ok"){
                radios[i].setAttribute("checked", "checked");
            } else if(radios[i].value == "Bad" && item.condition[1]== "Bad"){
                radios[i].setAttribute("checked", "checked");
            }
        }

        $("notes").value    = item.notes[1];
        }

    function clearData(){
        if(localStorage.length === 0){
            alert("No Data to Clear");
        }else{
            localStorage.clear();
            alert("All Contents Have Been Deleted");
            window.location.reload();
            return false;
        }
    }

    // Variable defaults
    var musicCategory = ["--Choose A style Category--", "80\'s", "Classical", "Country", "Metal", "Rap", "Rock"];
    var conditionValue;
    makeCats();

    // Set Link & Submit Click Events


    var displayLink = $("displayLink");
    displayLink.addEventListener("click", getData);

    var clearLink = $("clearLink");
    clearLink.addEventListener("click", clearData);

    var submitButton = $("submitButton");
    submitButton.addEventListener("click", storeData);
});

