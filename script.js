$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').on('click', function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script (only hamburger toggles; nav links close menu)
    $('.navbar-toggle').on('click', function(){
        $('.navbar .menu').toggleClass("active");
        $(this).find('i').toggleClass("active");
    });
    // close mobile menu when a nav link is clicked
    $('.navbar .menu a[href^="#"]').on('click', function(){
        $('.navbar .menu').removeClass("active");
        $('.navbar-toggle i').removeClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer","Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // footer year
    $('#year').text(new Date().getFullYear());

    // Download CV – opens/downloads Jaygautam.pdf (file must be in same folder as index.html)

    // Read more / Read less toggle for skills
    $('#read-more-btn').on('click', function(e){
        e.preventDefault();
        var $wrap = $('.skills-text-wrap');
        var $btn = $(this);
        $wrap.toggleClass('expanded');
        $btn.text($wrap.hasClass('expanded') ? 'Read less' : 'Read more');
    });

    // Contact form – opens default email app with your Gmail and form data
    var yourEmail = 'gautamjay1818@gmail.com';
    $('#contact-form').on('submit', function(e){
        e.preventDefault();
        var name = $(this).find('input[name="name"]').val().trim();
        var senderEmail = $(this).find('input[name="email"]').val().trim();
        var subject = $(this).find('input[name="subject"]').val().trim();
        var msg = $(this).find('textarea[name="message"]').val().trim();
        if (name && senderEmail && subject && msg) {
            var body = 'Name: ' + name + '\nEmail: ' + senderEmail + '\n\n' + msg;
            var mailto = 'mailto:' + yourEmail +
                '?subject=' + encodeURIComponent(subject) +
                '&body=' + encodeURIComponent(body);
            window.location.href = mailto;
            $(this)[0].reset();
        }
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});