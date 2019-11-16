// Ovde treba da stoji f-ja koja nam omogucava da se igramo sa menijem
function myFunction(x) {
    x.classList.toggle("change");
    x.classList.toggle("overlay.active");

    var menu = document.getElementsByName('menu-first');

    console.log('Radi');

    menu.classList.add('after-click');
}

$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.navbar').toggleClass('active');
    });
});
