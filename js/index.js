

$(document).ready(function() {

    /* TOP버튼 */
    $(".topBtn").click(function() {
      $("html,body").animate({scrollTop:"0"});    /*  자연스럽게 올라감 */
    })

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
            $('.index header nav h1 a img').attr("src", "../img/logo_black.png")
            $('.index header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
            $('.index header nav ul li:nth-child(2) a').css({"color" : "#1e1e1e"});
            $('.index header nav ul li:nth-child(2)').css({"border-bottom" : "solid 4px #171717"})
            // pagination  
            $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
            $('.index #fp-nav ul li:nth-child(2) a span').css({"background" : "#000"});
            $('.index #fp-nav ul li').css({"border" : "none"});
            $('.index #fp-nav ul li:nth-child(2)').css({"border" : "solid 0.13rem #000", "border-radius" : "50%"});
        } 
        // about us -> 메인
        else if (index == 2 && direction == 'up'){
            // header
            $('.index header nav h1 a img').attr("src", "../img/logo.png")
            $('.index header nav ul li a').css({"color" : "rgba(255,255,255,0.5)"});
            $('.index header nav ul li').css({"border" : "none"})

            // pagination  
            $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
            $('.index #fp-nav ul li:nth-child(1) span').css({"background" : "#fff"});
            $('.index #fp-nav ul li').css({"border" : "none"});
            $('.index #fp-nav ul li:nth-child(1)').css({"border" : "solid 0.13rem #fff", "border-radius" : "50%"});
        } 


        // about us -> services
        else if (index == 2 && direction == 'down'){
          // header
          $('.index header nav h1 a img').attr("src", "../img/logo_black.png")
          $('.index header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
          $('.index header nav ul li:nth-child(3) a').css({"color" : "#1e1e1e"});
          $('.index header nav ul li:nth-child(3)').css({"border-bottom" : "solid 4px #171717"})
          $('.index header nav ul li:nth-child(2)').css({"border" : "none"});
          // pagination  
          $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('.index #fp-nav ul li:nth-child(3) a span').css({"background" : "#000"});
          $('.index #fp-nav ul li').css({"border" : "none"});
          $('.index #fp-nav ul li:nth-child(3)').css({"border" : "solid 0.13rem #000", "border-radius" : "50%"});
        }
        // services -> about us
        else if (index == 3 && direction == 'up'){
          // header
          $('.index header nav h1 a img').attr("src", "../img/logo_black.png")
          $('.index header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
          $('.index header nav ul li:nth-child(2) a').css({"color" : "#1e1e1e"});
          $('.index header nav ul li:nth-child(2)').css({"border-bottom" : "solid 4px #171717"})
          $('.index header nav ul li:nth-child(3)').css({"border" : "none"});
          // pagination  
          $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('.index #fp-nav ul li:nth-child(2) a span').css({"background" : "#000"});
          $('.index #fp-nav ul li').css({"border" : "none"});
          $('.index #fp-nav ul li:nth-child(2)').css({"border" : "solid 0.13rem #000", "border-radius" : "50%"});
        }


        // services -> contact
        if (index == 3 && direction == 'down'){
          // header
          $('.index header nav h1 a img').attr("src", "../img/logo.png")
          $('.index header nav ul li a').css({"color" : "rgba(255,255,255,0.5)"});
          $('.index header nav ul li:nth-child(4) a').css({"color" : "#fff"});
          $('.index header nav ul li:nth-child(4)').css({"border-bottom" : "solid 4px #fff"})
          $('.index header nav ul li:nth-child(3)').css({"border" : "none"});
          // pagination  
          $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('.index #fp-nav ul li:nth-child(4) span').css({"background" : "#fff"});
          $('.index #fp-nav ul li').css({"border" : "none"});
          $('.index #fp-nav ul li:nth-child(4)').css({"border" : "solid 0.13rem #fff", "border-radius" : "50%"});
        } 
        // contact -> services
        else if (index == 4 && direction == 'up'){
          // header
          $('.index header nav h1 a img').attr("src", "../img/logo_black.png")
          $('.index header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
          $('.index header nav ul li:nth-child(3) a').css({"color" : "#1e1e1e"});
          $('.index header nav ul li:nth-child(3)').css({"border-bottom" : "solid 4px #171717"})
          $('.index header nav ul li:nth-child(4)').css({"border" : "none"});
          // pagination  
          $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('.index #fp-nav ul li:nth-child(3) a span').css({"background" : "#000"});
          $('.index #fp-nav ul li').css({"border" : "none"});
          $('.index #fp-nav ul li:nth-child(3)').css({"border" : "solid 0.13rem #000", "border-radius" : "50%"});
        } 

        // swiper.mousewheel.disable();
      },
      afterLoad: function(anchorLink, index) {      
        // 전환이 끝난후 이벤트풀기                               
        $('#fullpage').off('scroll mousewheel');     
        

        // 메인 애니메이션
        if(index == 1) {
          // header
          $('.index header nav h1 a img').attr("src", "../img/logo.png")
          $('.indexheader nav ul li a').css({"color" : "rgba(255,255,255,0.5)"});
          $('.index header nav ul li').css({"border" : "none"})
          // $('section .sec1 .ani_txt span').addClass('animation')
         // pagination  
          $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('.index #fp-nav ul li:nth-child(1) span').css({"background" : "#fff"});
          $('.index #fp-nav ul li').css({"border" : "none"});
          $('.index #fp-nav ul li:nth-child(1)').css({"border" : "solid 0.13rem #fff", "border-radius" : "50%"});
        } else {
          $('.index section .sec1 .ani_txt span').removeClass('animation')
          // $('.index section .sec1 .swiperwrapper.swiper_txt span').removeClass('animation')
        }

        // about us 텍스트 애니메이션
        if(index == 2) {
          // header
          $('.index header nav h1 a img').attr("src", "../img/logo_black.png")
          $('.index header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
          $('.index header nav ul li:nth-child(2) a').css({"color" : "#1e1e1e"});
          $('.index header nav ul li:nth-child(2)').css({"border-bottom" : "solid 4px #171717"})
          $('.index section .sec2 .ani_txt span').addClass('animation')


          $('.sub section .sec2 .ani_txt.ani_txt01 span').addClass('animation')

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
          $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('.index #fp-nav ul li:nth-child(2) a span').css({"background" : "#000"});
          $('.index #fp-nav ul li').css({"border" : "none"});
          $('.index #fp-nav ul li:nth-child(2)').css({"border" : "solid 0.13rem #000", "border-radius" : "50%"});
        } else {
          $('.index section .sec2 .ani_txt span').removeClass('animation')
          $('.index header nav ul li:nth-child(2)').css({"border" : "none"})
        }


        // services 애니메이션
        if(index == 3) {
          $('.index header nav h1 a img').attr("src", "../img/logo_black.png")
          $('.index header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
          $('.index header nav ul li:nth-child(3) a').css({"color" : "#1e1e1e"});
          $('.index header nav ul li:nth-child(3)').css({"border-bottom" : "solid 4px #171717"})
          $('.index section .sec3 .ani_txt span').addClass('animation')

          // pagination  
          $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('.index #fp-nav ul li:nth-child(3) a span').css({"background" : "#000"});
          $('.index #fp-nav ul li').css({"border" : "none"});
          $('.index #fp-nav ul li:nth-child(3)').css({"border" : "solid 0.13rem #000", "border-radius" : "50%"});
        } else {
          $('.index section .sec3 .ani_txt span').removeClass('animation')
          $('.index header nav ul li:nth-child(3)').css({"border" : "none"})
        }



        // contact 애니메이션
        if(index == 4) {
          $('.index header nav h1 a img').attr("src", "../img/logo.png")
          $('.index header nav ul li a').css({"color" : "rgba(255,255,255,0.5)"});
          $('.index header nav ul li:nth-child(4) a').css({"color" : "#fff"});
          $('.index header nav ul li:nth-child(4)').css({"border-bottom" : "solid 4px #fff"})
          $('.index section .sec4 .ani_txt span').addClass('animation')

          // pagination  
          $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('.index #fp-nav ul li:nth-child(4) span').css({"background" : "#fff"});
          $('.index #fp-nav ul li').css({"border" : "none"});
          $('.index #fp-nav ul li:nth-child(4)').css({"border" : "solid 0.13rem #fff", "border-radius" : "50%"});
        } else {
          $('.index section .sec4 .ani_txt span').removeClass('animation')
          $('.index header nav ul li:nth-child(4)').css({"border" : "none"})
        }

        if(!$(".fp-completely .swiper-wrapper").length > 0) $('#fullpage').off('touchmove'); 
        if(swiper1) swiper1.mousewheel.enable();    

        // if(swiper3) swiper3.mousewheel.enable(); 
        
        

        // if(swiper2) swiper2.mousewheel.enable();    
        if(!$(".sec1").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); // 슬라이드 섹션을 벗어나면 휠풀어주기
        if(!$(".sub .sec1").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); // 슬라이드 섹션을 벗어나면 휠풀어주기
        if(!$(".sub .sec2").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); // 슬라이드 섹션을 벗어나면 휠풀어주기
        if(!$(".sec3").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); // 슬라이드 섹션을 벗어나면 휠풀어주기
      },
      afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {

        console.log("현재 슬라이드 번호는?" + (+ slideIndex + 1));
      }

    });           







    // index 메인 & sub 메인 swiper
    var length1 = $(".sec1 .swiper-slide").length;
    var swiper1 = new Swiper('.sec1Swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: false,
        speed: 700,
        slideToClickedSlide : false,
        mousewheel: true,
        direction: "vertical",
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
              console.log("에브리클릭 노출")
              $('.index section .sec1 .ani_txt span').addClass('animation')
              setTimeout(() => $('.sub section .sec1 .ani_txt span').addClass('animation'), 500);

            } else if (idx == 1) {
              console.log("두번째 슬라이드")
              // $('.index section .sec1 .swiperwrapper.swiper_txt span').addClass('animation')
              // $('.sub section .sec1 .swiper_txt span').addClass('animation')
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
              // indx 페이지
              setTimeout(() => $('.index section .sec1 .swiperwrapper.swiper_txt span').addClass('animation'), 1000);
              $('.index section .sec1 .ani_txt span').removeClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt01 span').removeClass('animation')

              // sub 페이지
              console.log("에클 2슬라이드")
              setTimeout(() => $('.sub section .sec1 .swiper_txt span').addClass('animation'), 100);
              $('.sub section .sec1 .ani_txt span').removeClass('animation')
             

            } else if(idx == 0) {
              console.log("에클 1슬라이드")
              $('section .sec1 .swiperwrapper.swiper_txt span').removeClass('animation')
              $('.sub section .sec1 .swiper_txt span').removeClass('animation')
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
    var swiper2 = new Swiper('.index .sec2Swiper', {
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







    // sub 페이지 두번째 swiper
    var length3 = $(".sub .sec2 .swiper-slide").length;
    var swiper3 = new Swiper('.sub .sec2Swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: false,
        speed: 1000,
        slideToClickedSlide : false,
        mousewheel: true,
        direction: "vertical",
        allowTouchMove : false,
        touchRatio: 0,//드래그 금지
        on: {

          slideChange: function(){       
              var idx = this.activeIndex;
              if(this.activeIndex != 0 && idx != length3) $.fn.fullpage.setAllowScrolling(false);
              if(length3 == 3 && idx == 0) $.fn.fullpage.setAllowScrolling(false) 
          },  
          init: function () {
            var idx = this.activeIndex;
            if(idx == 0) {
              console.log("1번째 슬라이드")
              $('.sub section .sec2 .ani_txt.ani_txt01 span').addClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt02 span').removeClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt03 span').removeClass('animation')
            } 
          },
  
          slideChangeTransitionEnd: function(){
            var idx = this.activeIndex;
            if(idx == 0) {
              console.log("1번째 올라오는 슬라이드")
              $('.sub section .sec2 .ani_txt.ani_txt01 span').addClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt02 span').removeClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt03 span').removeClass('animation')
            } else if(idx == 1) {
              console.log("2번째 슬라이드")
              $('.sub section .sec2 .ani_txt.ani_txt02 span').addClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt01 span').removeClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt03 span').removeClass('animation')
            } else if(idx == 2) {
              console.log("3번째 슬라이드")
              $('.sub section .sec2 .ani_txt.ani_txt03 span').addClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt01 span').removeClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt02 span').removeClass('animation')
            }
            else if(idx !== 0 && idx !== 1) {
              console.log("다음 슬라이드 전환")
            }
            if(idx == 0 || idx >= length1-1) {
              $.fn.fullpage.setAllowScrolling(true);
            }
          },
          touchMove: function(e) {        
          var startY = e.touches.startY;
          setTimeout(function(){
            if(startY > e.touches.currentY) swiper3.slideNext();  
            else swiper3.slidePrev();
          },100);        
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


