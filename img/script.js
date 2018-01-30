$('.carousel-sync').carousel('cycle');
$('.carousel-sync').on('click', '.carousel-control[data-slide]', function (ev) {
	ev.preventDefault();
    $('.carousel-sync').carousel($(this).data('slide'));
});
$('.carousel-sync').on('mouseover', function(ev) {
  	ev.preventDefault();
    $('.carousel-sync').carousel('pause');
});
$('.carousel-sync').on('mouseleave', function(ev) {
  	ev.preventDefault();
    $('.carousel-sync').carousel('cycle');
});

$(document).ready(function(){
    $('.your-class').slick({
    slidesToShow: 3,
    dots:true,
    centerMode: true,
    });
  });

// $(document).ready(function(){
//     $('.your-class').slick( ()=>{
//         autoplay: true
//     })
//   });