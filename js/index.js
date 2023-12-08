

$(document).ready(function() {
    // fullpage
    $('#fullpage').fullpage({         
      anchors: ['sec1', 'sec2', 'sec3', 'sec4'],
      menu: '#menu',
      scrollingSpeed: 1000,
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['Top Tier', 'Middle Tier', 'Bottom Tier'],
      // easingcss3: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      onLeave: function(origin, destination, direction) {
        $('#fullpage').on('scroll touchmove mousewheel', function(event) {                    
          event.preventDefault();
          event.stopPropagation();
          return false;
        });
        // swiper.mousewheel.disable();
      },
      afterLoad: function(anchorLink, index) {      
        // 전환이 끝난후 이벤트풀기                               
        $('#fullpage').off('scroll mousewheel');      
        if(index == 1) {
            //     $("header.indHeader nav").css({"display" : "block"})
            $('section .sec1 .ani_txt span').addClass('animation')
            $('section .sec2 .ani_txt span').removeClass('animation')
            $('section .sec3 .ani_txt span').removeClass('animation')
            $('section .sec4 .ani_txt span').removeClass('animation')
        } else if(index == 2) {
            $('section .sec1 .ani_txt span').removeClass('animation')
            $('section .sec2 .ani_txt span').addClass('animation')
            $('section .sec3 .ani_txt span').removeClass('animation')
            $('section .sec4 .ani_txt span').removeClass('animation')
        } else if(index == 3) {
            $('section .sec1 .ani_txt span').removeClass('animation')
            $('section .sec2 .ani_txt span').removeClass('animation')
            /* service box 클릭 팝업 */
            $(".serviceBox").click(function() {
            	// $(".bottomBg").css({"display":"block"})
            	$(".popUp").css({"display":"block"});
              $('body').on('scroll touchmove mousewheel', function(event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
              });
            })
            // (닫기)
            $(".pop_close").click(function() {
            	$(".popUp").css({"display":"none"})
              $('body').off('scroll touchmove mousewheel');
            })
        } else if(index == 4) {
            $('section .sec1 .ani_txt span').removeClass('animation')
            $('section .sec2 .ani_txt span').removeClass('animation')
        }
        if(!$(".fp-completely .swiper-wrapper").length > 0) $('#fullpage').off('touchmove'); 
        if(swiper1) swiper1.mousewheel.enable();    
        if(swiper2) swiper2.mousewheel.enable();    
        if(!$(".sec1").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); // 슬라이드 섹션을 벗어나면 휠풀어주기
      }
    });           
  
    // swiper
    var length1 = $(".sec1 .swiper-slide").length;
    var swiper1 = new Swiper('.sec1Swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: false,
        speed: 1000,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        mousewheel: true,
        on: {
          slideChangeTransitionStart: function () {
            $('.swiperwrapper').hide(0);
            $('.swiperwrapper').removeClass('aos-init').removeClass('aos-animate');
          },
          slideChangeTransitionEnd: function () {
            $('.swiperwrapper').show(0);
            AOS.init();
          },
          slideChange: function(){        
              var idx = this.activeIndex;
              // 처음과 마지막 슬라이드가 아닐경우 fullpage전환 막기
              if(this.activeIndex != 0 && idx != length) $.fn.fullpage.setAllowScrolling(false);
              if(length == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false) //슬라이드가 2개밖에 없을때
              // console.log('즉시 : ' + idx);
          },  
          slideChangeTransitionEnd: function(){
          var idx = this.activeIndex;
          // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
          if(idx == 0 || idx >= length-1) $.fn.fullpage.setAllowScrolling(true);
          // console.log('전환후 : ' + idx);     
          },
          touchMove: function(e) {        
          var startY = e.touches.startY;
          setTimeout(function(){
            if(startY > e.touches.currentY) swiper.slideNext();  
            else swiper1.slidePrev();
          },100);        
          },
      }, 
    });     
    
    

    // swiper
    var length2 = $(".sec3 .swiper-slide").length;
    var swiper2 = new Swiper('.sec3Swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: false,
        speed: 1000,
        direction:'vertical',
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        mousewheel: true,
        on: {
          slideChange: function(){        
              var idx = this.activeIndex;
              // 처음과 마지막 슬라이드가 아닐경우 fullpage전환 막기
              if(this.activeIndex != 0 && idx != length) $.fn.fullpage.setAllowScrolling(false);
              if(length == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false) //슬라이드가 2개밖에 없을때
              // console.log('즉시 : ' + idx);
          },  
          slideChangeTransitionEnd: function(){
          var idx = this.activeIndex;
          // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
          if(idx == 0 || idx >= length-1) $.fn.fullpage.setAllowScrolling(true);
          // console.log('전환후 : ' + idx);     
          },
          touchMove: function(e) {        
          var startY = e.touches.startY;
          setTimeout(function(){
            if(startY > e.touches.currentY) swiper.slideNext();  
            else swiper2.slidePrev();
          },100);        
          },
      }, 
    });       

    



    





        $(".item_list1>li").click(function() {
            g_pop=$(this).index();
            $(".g_page1 span:nth-child(1)").text(g_pop+1);
            $("html").css({overflowY:"hidden"});
            $(".pop1>li").eq(g_pop).show();
            $(".popup1").stop().fadeIn();
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


