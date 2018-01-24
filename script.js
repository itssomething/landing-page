$(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.center-mode').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        // responsive: [
        // {
        //     breakpoint: 768,
        //     settings: {
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 3
        //     }
        // },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 1
        //     }
        // }
        // ]
    });
    $('.your-class').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.your-class',
        dots: false,
    });
});

$(document).ready(function(){
    $('.single-item').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
    });
});