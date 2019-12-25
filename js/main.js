$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked"); 
});
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     autoplay:true,
//     autoplayTimeout: 2000,
//     margin:80,
//     nav:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:4
//         }
//     }
// });

// $('.carousel').owlCarousel({
//     loop:true,
//     autoplay:true,
//     autoplayTimeout: 2000,
//     margin:80,
//     nav:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:4
//         }
//     }
// });

$(function(){
    $('.owl-carousel').each(function(){
      $(this).owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 2000,
        margin:80,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
      });
    });
  });