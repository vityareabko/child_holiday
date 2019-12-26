



  
$(document).ready(function(){
    $("#navToggle").click(function() {
        $("#navToggle").toggleClass("active");
        $(".overlay").toggleClass("open");
        $("body").toggleClass("locked"); 
        
    });
    $(".menu__item").on("click", function(){
        $("#navToggle").toggleClass("active");
        $(".overlay").toggleClass("open");
        $("body").toggleClass("locked"); 
    });



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

      
    $("#menu").on("click","a", function (event) {  
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

});


