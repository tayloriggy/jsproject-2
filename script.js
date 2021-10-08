/*
Project 2: Build a background color switcher.

Requirements:
-Create a Github repository for this project. 
-Create an HTML select dropdown with at least 5 color options in it
-use the "onchange" attribute so that every time a user selects a color using the dropdown, 
it calls your JavaScript function that changes the background color of the BODY to the color selected in the dropdown



*/


function changeBackground () {
    const select = document.getElementById("colors");
    const color = select.options[select.selectedIndex].value;
    document.body.style.background = color;
    
    

    
}