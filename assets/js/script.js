window.onscroll = function showHeader() {
	var header = document.querySelector('.header')
	var logo_dark = document.querySelector('.img-dark')
  var logo_light = document.querySelector('.img-light')

   if (window.pageYOffset > 1) {
   	header.classList.add('header-fixed')
    logo_dark.classList.add('logo-dark-show')
    logo_light.classList.add('logo-hiden')
   }else{
   	header.classList.remove('header-fixed')
   	logo_dark.classList.remove('logo-dark-show')
    logo_light.classList.remove('logo-hiden')
   }
}


// Фильтр категорий

$(function(){
	var filter = $("[data-filter]")
	
	filter.on("click", function(event){
	 event.preventDefault();

     var cat = $(this).data('filter');

     if(cat == 'all'){
        $("[data-cat]").removeClass("hide");
      } else{
       $("[data-cat]").each(function(){

      var workCat = $(this).data('cat')    

       if (workCat != cat) {
         $(this).addClass('hide');
       } else{
        $(this).removeClass('hide');
       }
      });
      } 

	});
});

// Счётчик цифр

var show = true;
    var countbox = ".part8";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
         
          $('.part8-num').each(function(){
            $(this).prop('Counter', 0).animate({
             Counter:$(this).text()
          },{
           duration: 3000,
           easing: 'swing',
           step:function(now){
           $(this).text(Math.ceil(now));
            }
          });
         });

          show = false;
        }
    });

// Видео на странице

$('[data-fancybox]').fancybox({
    youtube : {
        controls : 1,
        showinfo : 1
    }
});

// Слайдер иконок part10

$(document).ready(function(){
  $("#carousel-part10").owlCarousel({
    items:4,
    loop: true
  });
});

// Слайдер иконок part9

var nextIcon= '<i class="img-button9 _icon-right-arrow">'
var prevIcon= '<i class="img-button9 _icon-left-arrow">'

$(document).ready(function(){
  $("#carousel-part9").owlCarousel({
    items:3,
    loop:true,
    autoplay:true,
    nav:true,
    navElement: 'div',
    navText:[
     prevIcon,
     nextIcon
    ]
  });
});


$(document).ready(function(){
  $("#carousel-part1").owlCarousel({
    items:1,
    nav:true,
    navElement: 'div',
    navText:[
     prevIcon,
     nextIcon
    ]
  });
});

