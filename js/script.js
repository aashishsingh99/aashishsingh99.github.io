$(document).ready(function() {
    $('#slides').superslides({
        
        animation:'slide',
        play:5000,
        pagination: false
    });
    var typed = new Typed(".typed",{
        strings: ["Aspiring Software Engineer.","Machine Learning Enthusiast.","Web Developer."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false

    });

});