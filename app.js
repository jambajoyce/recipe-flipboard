var NUM_ROWS = 4;
var NUM_COLS = 4;

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



//run the main function once web page has fully loaded
window.onload = function () {
    main();
    console.log('hello');
}