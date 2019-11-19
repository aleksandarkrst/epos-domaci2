$(document).ready(function () {
    $('.toggle').click(function () {
        $('.toggle').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.menu').toggleClass('active');
    });
});

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
    console.log('Radi');
    $('.load').toggleClass('active');
    $('.loader').toggleClass('active');
}