var tablinks = document.getElementsByClassName("tab-links"); //Fetching active tab link
var tabcontents = document.getElementsByClassName("tab-contents"); //Fetching active 
function opentab(tabname){ //Function to remove active div class to add it to the one user clicks to show contents of that div class
    for(tablink of tablinks){//removing the first active class 
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){//removing the second active class
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");//adding to the chosen class
    document.getElementById(tabname).classList.add("active-tab");//adding to second chosen class
}