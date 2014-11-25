var APP_KEY = '22951439b596a4f6e848fe61afacbb94';
var APP_ID = '6ba4073d';
var myID = "_app_id=" + APP_ID + "&_app_key=" + APP_KEY;

var searchURL = "http://api.yummly.com/v1/api/recipes?_app_id=" + APP_ID + "&_app_key=" + APP_KEY + "&maxResult=100&start=0" + "&requirePictures=true&" 
var dinner = "q=dinner"
var chicken = "q=chicken"
var URL = "http://api.yummly.com/v1/api/recipe/recipe-id?" + myID;

var xmlhttp = new XMLHttpRequest();
var recipesArray = [];

function main() {
    $('.icon-menu').click( function() {
        $('.menu').animate({
            left: '0px'
        }, 200);
        
        $('.body').animate({
            left: '285px'
        }, 200);
        console.log('clicked');
    });
    
    $('.icon-close').click( function() {
        $('.menu').animate({
            left: '-285px'
        }, 200);
        
        $('.body').animate({
            left: '0px'
        }, 200);
        });


};

function httpGet(theUrl) {

    xmlhttp.open( "GET", searchURL + dinner, false );
    xmlhttp.send( null );
    var obj = JSON.parse(xmlhttp.responseText);
    for (var i = 0; i < obj.matches.length; i ++) {
        var name = obj.matches[i].recipeName;
        //console.log(obj.matches[i].recipeName);
        recipesArray[i] = {};
        recipesArray[i].name = name;

        var imgURL = obj.matches[i].smallImageUrls[0];
        imgURL = imgURL.substring(0, imgURL.length - 4);


        recipesArray[i].pic = imgURL;
        console.log(recipesArray[i].pic);

    }
    console.log(obj.matches);
}



//run the main function once web page has fully loaded
window.onload = function () {
    main();
    httpGet(searchURL + dinner);
    console.log('hello');
}