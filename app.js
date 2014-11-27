var APP_KEY = '22951439b596a4f6e848fe61afacbb94';
var APP_ID = '6ba4073d';
var myID = "_app_id=" + APP_ID + "&_app_key=" + APP_KEY;

var xmlhttp = new XMLHttpRequest();

// var searchURL = "http://api.yummly.com/v1/api/recipes?_app_id=" + APP_ID + "&_app_key=" + APP_KEY + "&maxResult=100&start=0" + "&requirePictures=true&" 
var searchURL = "http://api.yummly.com/v1/api/recipes?" + myID + "&maxResult=100&start=0" + "&requirePictures=true&" 
var dinner = "q=dinner"
var chicken = "q=chicken"
var URL = "http://api.yummly.com/v1/api/recipe/recipe-id?" + myID;

var recipeURL = "http://api.yummly.com/v1/api/recipe/recipe-id?_app_id=" + APP_ID + " &_app_key=" + APP_KEY + ""



// each object in the array contains the name of the recipe, image url of the recipe, and link to the recipe
var recipesArray = [];
var counter = 0;

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

        var id = obj.matches[i].id;
        recipesArray[i].url = "http://www.yummly.com/recipe/" + id;

        console.log(recipesArray[i]);

    }
// put first recipe onto page
//    console.log(obj.matches);

    var recipePic = new Image();
    recipePic.src = recipesArray[counter].pic;
    console.log("in");
    console.log(recipePic.src);

    recipePic.onload = function() {
        //imgTagContents = "<img id='theImg' " + "src=' " + recipePic.src + "'/>";
        var currentImage = document.getElementById("myImg");
        currentImage.src = recipePic.src;
        console.log("onload");
        //$('.box').prepend(recipePic);
    };

    $("#rec-link").attr("href", recipesArray[counter].url);
    $("#rec-link").text(recipesArray[counter].name);

    counter += 1;
}

function switchRecipe() {
    //Change picture
    var recipePic = new Image();
    recipePic.src = recipesArray[counter].pic;
    console.log("in");
    console.log(recipePic.src);

    recipePic.onload = function() {
        //imgTagContents = "<img id='theImg' " + "src=' " + recipePic.src + "'/>";
        var currentImage = document.getElementById("myImg");
        currentImage.src = recipePic.src;
        console.log("onload");
        //$('.box').prepend(recipePic);
    };

    // Change name + link:
    $("#rec-link").attr("href", recipesArray[counter].url);
    $("#rec-link").text(recipesArray[counter].name);


    counter += 1;
    console.log("next");
}


//run the main function once web page has fully loaded
window.onload = function () {
    main();
    httpGet(searchURL + dinner);
    console.log('hello');
}