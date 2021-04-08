// $('.login-signup-reset').find('input, textarea').on('keyup blur focus', function (e) {
//     var $this = $(this),
//     label = $this.prev('label');

//     if (e.type === 'keyup') {
//             if ($this.val() === '') {
//         label.removeClass('active highlight');
//         } else {
//         label.addClass('active highlight');
//         }
//     } else if (e.type === 'blur') {
//         if( $this.val() === '' ) {
//             label.removeClass('active highlight'); 
//             } else {
//             label.removeClass('highlight');   
//             }   
//     } else if (e.type === 'focus') {
    
//     if( $this.val() === '' ) {
//             label.removeClass('highlight'); 
//             } 
//     else if( $this.val() !== '' ) {
//             label.addClass('highlight');
//             }
//     }
// });

$(".lession").click(function() {
    
    var listItems = $(".lession");

    document.getElementById("session-test").classList.remove("show-test");
    document.getElementById("session-learn").classList.add("show-video-learn")
      
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
    }
      
    this.classList.add("active");
});

$(".lession.btn-test").click(function() {
    document.getElementById("session-test").classList.add("show-test");
    document.getElementById("session-learn").classList.remove("show-video-learn");
});

$( document ).ready(function() {
    $( "#showToast" ).click(function() {
      $('.toast').toast('show');
    });
      
});


  
$('.tab-form-active a').on('click', function (e) {
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
});
  

window.onload = function() {
    $(".box-inner").find("h6").addClass("translate-sub");
    $(".box-inner").find("h3").addClass("translate-main");
    $(".box-inner").find("p").addClass("translate-text");
    $(".box-inner").find("button").addClass("translate-now");
};

$('.carousel-background-panner').carousel({
    interval: 7000
})

$('.carousel-instructor').owlCarousel({
    autoplay:true,
    autoplayTimeout:5000,
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});4

$('.carousel-partner').owlCarousel({
    autoplay:true,
    autoplayTimeout:4000,
    loop:true,
    nav:true,
    dots:false,
    nav: false,
    responsive:{
        0:{
            items:2
        },
        450:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})