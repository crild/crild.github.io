var main = function() {
$(‘.glow’).hover(function() {
    $(‘.glow’).css(“background-color”, “pink”);
});
$('img').hover(function() {
    $('.information').addClass("mostrar");
    $('.information').removeClass("hide");      

});

$(document).ready(main);

