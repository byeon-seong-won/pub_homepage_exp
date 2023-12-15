

$(document).ready(function() {
    // fullpage
    $('#fullpage').fullpage({         
      anchors: ['sec1', 'sec2', 'sec3', 'sec4'],
      menu: '#menu',
      scrollingSpeed: 1000,
      navigation: true,
      // responsiveWidth: 1025,
      navigationPosition: 'right',
      // navigationTooltips: ['Top Tier', 'Middle Tier', 'Bottom Tier'],
      // easingcss3: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      onLeave: function(index, nextIndex, direction) {
        $('#fullpage').on('scroll touchmove mousewheel', function(event) {                    
          event.preventDefault();
          event.stopPropagation();
          return false;
        });
        

        // 메인 -> about us
        if (index == 1 && direction == 'down'){
            // header
            $('header nav h1 a img').attr("src", "../img/logo_black.png")
            $('header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
            $('header nav ul li:nth-child(2) a').css({"color" : "#1e1e1e"});
            $('header nav ul li:nth-child(2)').css({"border-bottom" : "solid 4px #171717"})
            // pagination  
            $('#fp-nav ul li a span').css({"background" : "#b2b2b2"});
            $('#fp-nav ul li:nth-child(2) a span').css({"background" : "#000"});
            $('#fp-nav ul li').css({"border" : "none"});
            $('#fp-nav ul li:nth-child(2)').css({"border" : "solid 0.13rem #000", "border-radius" : "50%"});
        } 
        // about us -> 메인
        else if (index == 2 && direction == 'up'){
            // header
            $('header nav h1 a img').attr("src", "../img/logo.png")
            $('header nav ul li a').css({"color" : "rgba(255,255,255,0.5)"});
            $('header nav ul li').css({"border" : "none"})

            // pagination  
            $('#fp-nav ul li a span').css({"background" : "#b2b2b2"});
            $('#fp-nav ul li:nth-child(1) span').css({"background" : "#fff"});
            $('#fp-nav ul li').css({"border" : "none"});
            $('#fp-nav ul li:nth-child(1)').css({"border" : "solid 0.13rem #fff", "border-radius" : "50%"});
        } 


        // about us -> services
        else if (index == 2 && direction == 'down'){
          // header
          $('header nav h1 a img').attr("src", "../img/logo_black.png")
          $('header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
          $('header nav ul li:nth-child(3) a').css({"color" : "#1e1e1e"});
          $('header nav ul li:nth-child(3)').css({"border-bottom" : "solid 4px #171717"})
          $('header nav ul li:nth-child(2)').css({"border" : "none"});
          // pagination  
          $('#fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('#fp-nav ul li:nth-child(3) a span').css({"background" : "#000"});
          $('#fp-nav ul li').css({"border" : "none"});
          $('#fp-nav ul li:nth-child(3)').css({"border" : "solid 0.13rem #000", "border-radius" : "50%"});
        }
        // services -> about us
        else if (index == 3 && direction == 'up'){
          // header
          $('header nav h1 a img').attr("src", "../img/logo_black.png")
          $('header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
          $('header nav ul li:nth-child(2) a').css({"color" : "#1e1e1e"});
          $('header nav ul li:nth-child(2)').css({"border-bottom" : "solid 4px #171717"})
          $('header nav ul li:nth-child(3)').css({"border" : "none"});
          // pagination  
          $('#fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('#fp-nav ul li:nth-child(2) a span').css({"background" : "#000"});
          $('#fp-nav ul li').css({"border" : "none"});
          $('#fp-nav ul li:nth-child(2)').css({"border" : "solid 0.13rem #000", "border-radius" : "50%"});
        }


        // services -> contact
        if (index == 3 && direction == 'down'){
          // header
          $('header nav h1 a img').attr("src", "../img/logo.png")
          $('header nav ul li a').css({"color" : "rgba(255,255,255,0.5)"});
          $('header nav ul li:nth-child(4) a').css({"color" : "#fff"});
          $('header nav ul li:nth-child(4)').css({"border-bottom" : "solid 4px #fff"})
          $('header nav ul li:nth-child(3)').css({"border" : "none"});
          // pagination  
          $('#fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('#fp-nav ul li:nth-child(4) span').css({"background" : "#fff"});
          $('#fp-nav ul li').css({"border" : "none"});
          $('#fp-nav ul li:nth-child(4)').css({"border" : "solid 0.13rem #fff", "border-radius" : "50%"});
        } 
        // contact -> services
        else if (index == 4 && direction == 'up'){
          // header
          $('header nav h1 a img').attr("src", "../img/logo_black.png")
          $('header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
          $('header nav ul li:nth-child(3) a').css({"color" : "#1e1e1e"});
          $('header nav ul li:nth-child(3)').css({"border-bottom" : "solid 4px #171717"})
          $('header nav ul li:nth-child(4)').css({"border" : "none"});
          // pagination  
          $('#fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('#fp-nav ul li:nth-child(3) a span').css({"background" : "#000"});
          $('#fp-nav ul li').css({"border" : "none"});
          $('#fp-nav ul li:nth-child(3)').css({"border" : "solid 0.13rem #000", "border-radius" : "50%"});
        } 

        // swiper.mousewheel.disable();
      },
      afterLoad: function(anchorLink, index) {      
        // 전환이 끝난후 이벤트풀기                               
        $('#fullpage').off('scroll mousewheel');     
        

        // 메인 애니메이션
        if(index == 1) {
          // header
          $('header nav h1 a img').attr("src", "../img/logo.png")
          $('header nav ul li a').css({"color" : "rgba(255,255,255,0.5)"});
          $('header nav ul li').css({"border" : "none"})
          // $('section .sec1 .ani_txt span').addClass('animation')
         // pagination  
          $('#fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('#fp-nav ul li:nth-child(1) span').css({"background" : "#fff"});
          $('#fp-nav ul li').css({"border" : "none"});
          $('#fp-nav ul li:nth-child(1)').css({"border" : "solid 0.13rem #fff", "border-radius" : "50%"});
        } else {
          $('section .sec1 .ani_txt span').removeClass('animation')
          $('section .sec1 .swiperwrapper.swiper_txt span').removeClass('animation')
        }

        // about us 텍스트 애니메이션
        if(index == 2) {
          // header
          $('header nav h1 a img').attr("src", "../img/logo_black.png")
          $('header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
          $('header nav ul li:nth-child(2) a').css({"color" : "#1e1e1e"});
          $('header nav ul li:nth-child(2)').css({"border-bottom" : "solid 4px #171717"})
          $('section .sec2 .ani_txt span').addClass('animation')

          // 점선 애니메이션
          console.log("about us임")
          
          // $('.section.sec2 .rightImg>div.front').addClass('ani')
          // setTimeout("ballAni()",500);
          // function ballAni() {
          //   $('.section.sec2 .rightImg>div.front').addClass('ani');
          //   // setTimeout($('.section.sec2 .rightImg>div.front').removeClass('ani'),1000);
          // }
          // $('.section.sec2 .rightImg>div.front').removeClass('ani')

          // pagination  
          $('#fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('#fp-nav ul li:nth-child(2) a span').css({"background" : "#000"});
          $('#fp-nav ul li').css({"border" : "none"});
          $('#fp-nav ul li:nth-child(2)').css({"border" : "solid 0.13rem #000", "border-radius" : "50%"});
        } else {
          $('section .sec2 .ani_txt span').removeClass('animation')
          $('header nav ul li:nth-child(2)').css({"border" : "none"})
        }


        // services 애니메이션
        if(index == 3) {
          $('header nav h1 a img').attr("src", "../img/logo_black.png")
          $('header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
          $('header nav ul li:nth-child(3) a').css({"color" : "#1e1e1e"});
          $('header nav ul li:nth-child(3)').css({"border-bottom" : "solid 4px #171717"})
          $('section .sec3 .ani_txt span').addClass('animation')

          // pagination  
          $('#fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('#fp-nav ul li:nth-child(3) a span').css({"background" : "#000"});
          $('#fp-nav ul li').css({"border" : "none"});
          $('#fp-nav ul li:nth-child(3)').css({"border" : "solid 0.13rem #000", "border-radius" : "50%"});
        } else {
          $('section .sec3 .ani_txt span').removeClass('animation')
          $('header nav ul li:nth-child(3)').css({"border" : "none"})
        }



        // contact 애니메이션
        if(index == 4) {
          $('header nav h1 a img').attr("src", "../img/logo.png")
          $('header nav ul li a').css({"color" : "rgba(255,255,255,0.5)"});
          $('header nav ul li:nth-child(4) a').css({"color" : "#fff"});
          $('header nav ul li:nth-child(4)').css({"border-bottom" : "solid 4px #fff"})
          $('section .sec4 .ani_txt span').addClass('animation')

          // pagination  
          $('#fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('#fp-nav ul li:nth-child(4) span').css({"background" : "#fff"});
          $('#fp-nav ul li').css({"border" : "none"});
          $('#fp-nav ul li:nth-child(4)').css({"border" : "solid 0.13rem #fff", "border-radius" : "50%"});
        } else {
          $('section .sec4 .ani_txt span').removeClass('animation')
          $('header nav ul li:nth-child(4)').css({"border" : "none"})
        }

        if(!$(".fp-completely .swiper-wrapper").length > 0) $('#fullpage').off('touchmove'); 
        if(swiper1) swiper1.mousewheel.enable();    
        // if(swiper2) swiper2.mousewheel.enable();    
        // if(swiper2) swiper2.mousewheel.enable();    
        if(!$(".sec1").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); // 슬라이드 섹션을 벗어나면 휠풀어주기
        if(!$(".sec3").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); // 슬라이드 섹션을 벗어나면 휠풀어주기
      },
      afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {

        console.log("현재 슬라이드 번호는?" + (+ slideIndex + 1));
      }



    });           
  
    
    // main swiper
    var length1 = $(".sec1 .swiper-slide").length;
    var swiper1 = new Swiper('.sec1Swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: false,
        speed: 700,
        slideToClickedSlide : false,
        mousewheel: true,
        on: {
          slideChangeTransitionStart: function () {
            $('.swiperwrapper').hide(0);
          },
          slideChange: function(){       
              var idx = this.activeIndex;
              if(this.activeIndex != 0 && idx != length1) $.fn.fullpage.setAllowScrolling(false);
              if(length1 == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false) 
          },  
          init: function () {
            var idx = this.activeIndex;
            if(idx == 0) {
              $('section .sec1 .ani_txt span').addClass('animation')
            } else if (idx == 1) {
              $('section .sec1 .swiperwrapper.swiper_txt span').addClass('animation')
            }
          },

          slideChangeTransitionEnd: function(){
            var idx = this.activeIndex;
            if(idx == 1) {
              console.log("2탐")
              $('.swiperwrapper').show(0);
              gsap.from(".swiperwrapper", {
                duration: 1,
                opacity: 0,
                yPercent: 100,
                ease: 'back.out',
                scrollTrigger: {
                  trigger: ".swiperwrapper",
                  start: "top 80%",
                  markers: false,
                }
              });
              setTimeout(() => $('section .sec1 .swiperwrapper.swiper_txt span').addClass('animation'), 1000);
              $('section .sec1 .ani_txt span').removeClass('animation')
            } else if(idx == 0) {
              $('section .sec1 .swiperwrapper.swiper_txt span').removeClass('animation')
              $('section .sec1 .ani_txt span').addClass('animation')
            } else if(idx !== 0 && idx !== 1) {
              console.log("다음 슬라이드 전환")
            }
            if(idx == 0 || idx >= length1-1) {
              $.fn.fullpage.setAllowScrolling(true);
            }
          },
          touchMove: function(e) {        
          var startY = e.touches.startY;
          setTimeout(function(){
            if(startY > e.touches.currentY) swiper1.slideNext();  
            else swiper1.slidePrev();
          },100);        
          },
      }, 
    }); 
    
    



    // services swiper slide
    var length2 = $(".mobileBoxcont .swiper-slide").length;
    var swiper2 = new Swiper('.sec2Swiper', {
        slidesPerView: 1,
        freeMode: false,
        slideToClickedSlide: true,
        grabCursor: true,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2, 
          },
        },
    });









    






    













    });

  


    // 인트로 - 메인 효과
    // $(function() {

    //   // 스크롤 막기
    //   $('body').on('scroll touchmove mousewheel', function(e){
    //     e.preventDefault();
    //     e.stopPropagation(); 
    //     return false;
    //   })
  
    //   var perNum = 100;
    //   $('.second.circle').circleProgress({
    //     value: perNum/100,
    //     startAngle:300,
    //     size:200,
    //     fill:{
    //       gradient:["#37FF8B","#37FF8B"],
    //       // gradient:["#14bab8","#37FF8B","#32d2b5","#14bab8","#37FF8B","#32d2b5"],
    //       gradientAngle: Math.PI / 2
    //     },
    //     animation:{
    //       duration:2200,
    //       easing:"swing"
    //     },
    //     lineCap : "round",
    //     reverse:true
              
    //     }).on('circle-animation-progress', function(event, progress) {
    //           $(".second.circle>canvas").css({"box-shadow" : "20px 20px 60px #166638, -20px -20px 60px #58ffde," })
    //           $(this).find('.perc').html(Math.round(perNum * progress) + '<span>%</span>');
    //           setTimeout("startAni()", 2300);  
    //           setTimeout("showMain()", 3700);
    //   })
    // });

    // 문구 애니메이션
    // function startAni() {
    //   $(".hover-text").addClass('active')
    // };

    // 메인페이지 등장
    // function showMain() {
    //   $(".notice").css({"opacity" : "0"})
    //   $(".curtain__panel--left").css({"transform":"translateX(-100%)"});
    //   $(".curtain__panel--right").css({"transform":"translateX(100%)"});

    //   // 스크롤 풀기
    //   $('body').off('scroll touchmove mousewheel'); 
    // };
      





    // slick slider
    // $('.slickslider01').slick({
    //   infinite: true,
    //   slidesToShow: 5,
    //   slidesToScroll: 1,
    //   speed: 300,
    //   dots: true,
    //   autoplay: true,     
    //   autoplaySpeed: 2000
    // });
    // $('.slickslider02').slick({
    //   infinite: true,
    //   slidesToShow: 5,
    //   slidesToScroll: 1,
    //   speed: 300,
    //   dots: true,
    //   autoplay: true,     
    //   autoplaySpeed: 2000
    // });
    

  






  // 브라우저 resize 처리
  // $(window).scroll(function() {
  //   window.addEventListener("resize", function() {
  //     $(window).scrollTop(0);
  //   })
  // })


