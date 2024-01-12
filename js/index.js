
$(document).ready(function() {




  // 배경 three.js 애니메이션
  // class Stage {
  //   constructor() {
  //     this.renderParam = {
  //       width: window.innerWidth,
  //       height: window.innerHeight
  //     };
  
  //     this.cameraParam = {
  //       fov: 70,
  //       lookAt: new THREE.Vector3(0, 0, 0)
  //     };
  
  //     this.fogParam = {
  //       color: 0x000000,
  //       start: 50,
  //       end: 2000
  //     };
  
  //     this.scene = null;
  //     this.camera = null;
  //     this.renderer = null;
  //     this.geometry = null;
  //     this.material = null;
  //     this.mesh = null;
  //     this.isInitialized = false;
  //   }
  
  //   init() {
  //     this._setScene();
  //     this._setRender();
  //     this._setCamera();
  //     this._setFog();
  
  //     this.isInitialized = true;
  //   }
  
  //   _setScene() {
  //     this.scene = new THREE.Scene();
  //   }
  
  //   _setRender() {
  //     this.renderer = new THREE.WebGLRenderer({
  //       canvas: document.getElementById("webgl-canvas"),
  //       alpha: true
  //     });
  //     this.renderer.setPixelRatio(window.devicePixelRatio);
  //     this.renderer.setSize(this.renderParam.width, this.renderParam.height);
  //   }
  
  //   _setCamera() {
  //     const windowWidth = window.innerWidth;
  //     const windowHeight = window.innerHeight;
  
  //     if (!this.isInitialized) {
  //       this.camera = new THREE.PerspectiveCamera(
  //         this.cameraParam.fov,
  //         this.renderParam.width / this.renderParam.height
  //       );
  
  //       this.camera.lookAt(this.cameraParam.lookAt);
  //     }
  
  //     this.camera.aspect = windowWidth / windowHeight;
  //     this.camera.updateProjectionMatrix();
  //     this.renderer.setPixelRatio(window.devicePixelRatio);
  //     this.renderer.setSize(windowWidth, windowHeight);
  //   }
  
  //   _setFog() {
  //     this.scene.fog = new THREE.Fog(
  //       this.fogParam.fov,
  //       this.fogParam.start,
  //       this.fogParam.end
  //     );
  //   }
  
  //   _render() {
  //     let rot = 0;
  //     const radian = (rot * Math.PI) / 180;
  
  //     rot += 0.1;
  //     this.camera.position.x = 1000 * Math.sin(radian);
  //     this.camera.position.z = 1000 * Math.cos(radian);
  //     this.renderer.render(this.scene, this.camera);
  //   }
  
  //   onResize() {
  //     this._setCamera();
  //   }
  
  //   onRaf() {
  //     this._render();
  //   }
  // }
  
  // class Mesh {
  //   constructor(stage) {
  //     this.stage = stage;
  //     this.mesh = null;
  //   }
  
  //   init() {
  //     this._setMesh();
  //   }
  
  //   _setMesh() {
  //     const vertices = [];
  //     const SIZE = 3000;
  //     const LENGTH = 3000;
  //     const geometry = new THREE.BufferGeometry();
  //     const material = new THREE.PointsMaterial({
  //       color: 0xffffff
  //     });
  
  //     for (let i = 0; i < LENGTH; i++) {
  //       const x = SIZE * (Math.random() - 0.5);
  //       const y = SIZE * (Math.random() - 0.5);
  //       const z = SIZE * (Math.random() - 0.5);
  
  //       vertices.push(x, y, z);
  //     }
  
  //     geometry.setAttribute(
  //       "position",
  //       new THREE.Float32BufferAttribute(vertices, 3)
  //     );
  
  //     this.mesh = new THREE.Points(geometry, material);
  //     this.stage.scene.add(this.mesh);
  //   }
  
  //   _render() {
  //     this.mesh.rotation.y += 0.001;
  //   }
  
  //   onRaf() {
  //     this._render();
  //   }
  // }
  
  // (() => {
  //   const stage = new Stage();
  //   const mesh = new Mesh(stage);
  
  //   stage.init();
  //   mesh.init();
  
  //   window.addEventListener("resize", () => {
  //     stage.onResize();
  //   });
  
  //   const _raf = () => {
  //     window.requestAnimationFrame(() => {
  //       stage.onRaf();
  //       mesh.onRaf();
  
  //       _raf();
  //     });
  //   };
  
  //   _raf();
  // })();
  


















    /* TOP버튼 */
    $(".topBtn").click(function() {
      $("html,body").animate({scrollTop:"0"});    /*  자연스럽게 올라감 */
    })




    // fullpage
    $('#fullpage').fullpage({         
      anchors: ['sec1', 'sec2', 'sec3', 'sec4'],
      menu: '#menu',
      scrollingSpeed: 700,
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
            $('.index header nav h1 a img').attr("src", "./img/logo_black.png")
            //$('.sub .topBtn').attr("src", "../img/logo_black.png")
            $('.sub header nav h1 a img').attr("src", "./img/logo_black.png")
            $('.index header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
            $('.index header nav ul li:nth-child(2) a').css({"color" : "#1e1e1e"});
            $('.index header nav ul li:nth-child(2)').css({"border-bottom" : "solid 0.25rem #171717"})
            // pagination  
            $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
            $('.index #fp-nav ul li:nth-child(2) a span').css({"background" : "#000"});
            $('.index #fp-nav ul li').css({"border" : "none"});
            $('.index #fp-nav ul li:nth-child(2)').css({"border" : "solid 0.1rem #000", "border-radius" : "50%"});
       
            $('.sub.quiz .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').addClass('ani')
            $('.sub.every .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').addClass('ani')
            $('.sub.news .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').addClass('ani')
          
          
            
          
          
          
          } 
        // about us -> 메인
        else if (index == 2 && direction == 'up'){
          
            // header
            $('.index header nav h1 a img').attr("src", "./img/logo.png")
            //$('.sub .topBtn').attr("src", "../img/logo.png")
            $('.sub header nav h1 a img').attr("src", "./img/logo.png")
            $('.index header nav ul li a').css({"color" : "rgba(255,255,255,0.5)"});
            $('.index header nav ul li').css({"border" : "none"})

            // pagination  
            $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
            $('.index #fp-nav ul li:nth-child(1) span').css({"background" : "#fff"});
            $('.index #fp-nav ul li').css({"border" : "none"});
            $('.index #fp-nav ul li:nth-child(1)').css({"border" : "solid 0.1rem #fff", "border-radius" : "50%"});
            console.log("서브 메인으로!!")
            // swiper3.mousewheel.disable();
            

            if($(".index .sec2").hasClass("active")) {
              swiper1.slideTo(0);
            }
            if($(".sub .sec2").hasClass("active")) {
              swiper4.slideTo(0);
            }

            // swiper1.slideTo(0);

        } 
        // else if (nextIndex == 3) {
        //   console.log("fullpage services 진입")
        //   if($(".index .sec3").hasClass("active")) {
        //     initSwiper();
            
        //   }
        // }
  

        // about us -> services
        else if (index == 2 && direction == 'down'){
          // header
          $('.index header nav h1 a img').attr("src", "./img/logo_black.png")
          $('.index header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
          $('.index header nav ul li:nth-child(3) a').css({"color" : "#1e1e1e"});
          $('.index header nav ul li:nth-child(3)').css({"border-bottom" : "solid 0.25rem #171717"})
          $('.index header nav ul li:nth-child(2)').css({"border" : "none"});
          // pagination  
          $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('.index #fp-nav ul li:nth-child(3) a span').css({"background" : "#000"});
          $('.index #fp-nav ul li').css({"border" : "none"});
          $('.index #fp-nav ul li:nth-child(3)').css({"border" : "solid 0.1rem #000", "border-radius" : "50%"});
        }
        // services -> about us
        else if (index == 3 && direction == 'up'){
          // header
          $('.index header nav h1 a img').attr("src", "./img/logo_black.png")
          $('.index header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
          $('.index header nav ul li:nth-child(2) a').css({"color" : "#1e1e1e"});
          $('.index header nav ul li:nth-child(2)').css({"border-bottom" : "solid 0.25rem #171717"})
          $('.index header nav ul li:nth-child(3)').css({"border" : "none"});
          // pagination  
          $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('.index #fp-nav ul li:nth-child(2) a span').css({"background" : "#000"});
          $('.index #fp-nav ul li').css({"border" : "none"});
          $('.index #fp-nav ul li:nth-child(2)').css({"border" : "solid 0.1rem #000", "border-radius" : "50%"});
        }


        // services -> contact
        if (index == 3 && direction == 'down'){
          // header
          $('.index header nav h1 a img').attr("src", "./img/logo.png")
          $('.index header nav ul li a').css({"color" : "rgba(255,255,255,0.5)"});
          $('.index header nav ul li:nth-child(4) a').css({"color" : "#fff"});
          $('.index header nav ul li:nth-child(4)').css({"border-bottom" : "solid 0.25rem #fff"})
          $('.index header nav ul li:nth-child(3)').css({"border" : "none"});
          // pagination  
          $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('.index #fp-nav ul li:nth-child(4) span').css({"background" : "#fff"});
          $('.index #fp-nav ul li').css({"border" : "none"});
          $('.index #fp-nav ul li:nth-child(4)').css({"border" : "solid 0.1rem #fff", "border-radius" : "50%"});
        } 
        // contact -> services
        else if (index == 4 && direction == 'up'){
          // header
          $('.index header nav h1 a img').attr("src", "./img/logo_black.png")
          $('.index header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
          $('.index header nav ul li:nth-child(3) a').css({"color" : "#1e1e1e"});
          $('.index header nav ul li:nth-child(3)').css({"border-bottom" : "solid 0.25rem #171717"})
          $('.index header nav ul li:nth-child(4)').css({"border" : "none"});
          // pagination  
          $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('.index #fp-nav ul li:nth-child(3) a span').css({"background" : "#000"});
          $('.index #fp-nav ul li').css({"border" : "none"});
          $('.index #fp-nav ul li:nth-child(3)').css({"border" : "solid 0.1rem #000", "border-radius" : "50%"});
        } 

        // swiper.mousewheel.disable();
      },
      afterLoad: function(anchorLink, index) {      
        // 전환이 끝난후 이벤트풀기                               
        $('#fullpage').off('scroll mousewheel');     
       

        // 메인 애니메이션
        if(index == 1) {
          
          // header
          $('.index header nav h1 a img').attr("src", "./img/logo.png")
          $('.index header nav ul li a').css({"color" : "rgba(255,255,255,0.5)"});
          $('.sub header nav ul li a').css({"color" : "rgba(255,255,255,0.5)"});
          $('.index header nav ul li').css({"border" : "none"})
          // $('section .sec1 .ani_txt span').addClass('animation')
         // pagination  
          $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('.index #fp-nav ul li:nth-child(1) span').css({"background" : "#fff"});
          $('.index #fp-nav ul li').css({"border" : "none"});
          $('.index #fp-nav ul li:nth-child(1)').css({"border" : "solid 0.1rem #fff", "border-radius" : "50%"});
          $('.sub .topBtn').attr("src", "./img/top_btn_white.png")
          $('.sub section .sec2 .ani_txt.ani_txt01 span').removeClass('animation')
          $('.sub.quiz .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
          $('.sub.every .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
          $('.sub.news .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
          $('.index section .sec1 .ani_txt span').addClass('animation');
          // if($(".index .sec1").hasClass("active")) {
          //   $.fn.fullpage.setAllowScrolling(true); 
          // } 


        } else {
     
          $('.index section .sec1 .ani_txt span').removeClass('animation')
        }

        // about us 텍스트 애니메이션
        if(index == 2) {
          // header
          $('.index header nav h1 a img').attr("src", "./img/logo_black.png")
          $('.sub header nav ul li a').css({"color" : "rgba(0,0,0,0.5)"});
          $('.index header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
          $('.index header nav ul li:nth-child(2) a').css({"color" : "#1e1e1e"});
          $('.index header nav ul li:nth-child(2)').css({"border-bottom" : "solid 0.25rem #171717"})
          $('.index section .sec2 .ani_txt span').addClass('animation')
          $('.sub .topBtn').attr("src", "./img/sub_top.png")
          $('.sub section .sec2 .ani_txt.ani_txt01 span').addClass('animation')


          console.log("about us임")
          $('.sub.quiz .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').addClass('ani')
          $('.sub.every .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').addClass('ani')
          $('.sub.news .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').addClass('ani')

          // pagination  
          $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('.index #fp-nav ul li:nth-child(2) a span').css({"background" : "#000"});
          $('.index #fp-nav ul li').css({"border" : "none"});
          $('.index #fp-nav ul li:nth-child(2)').css({"border" : "solid 0.13rem #000", "border-radius" : "50%"});
          $('.sub section .sec2 .ani_txt.ani_txt_fix span').addClass('animation');
          if($(".index .sec2").hasClass("active")) {
            $.fn.fullpage.setAllowScrolling(true); 
          } 

          $('.index .section.sec2 .rightImg>img.ball.pcImg').each(function (i) {
            var $this = $(this);
            $this.stop().delay(i * 1000).animate(
                {
                    top: '+=50%',
                    left: '-=50px',
                    width : '316px',
                    height : '316px',
                    transtion : '0.5s'
                },
                {
                    duration: 600,
                    start: function () {
                        setTimeout(function () {
                            setInterval(function () {
                                $this.addClass('ani')
                            }, 1000);
                        });
                    }
                }
            );
          });


        } else {
          $('.index section .sec2 .ani_txt span').removeClass('animation')
          $('.index header nav ul li:nth-child(2)').css({"border" : "none"})
          $('.sub section .sec2 .ani_txt.ani_txt_fix span').removeClass('animation')
          $('.sub section .sec2 .ani_txt.ani_txt_fix span').removeClass('animation')
          $('.sub.quiz .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
          $('.sub.every .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
          $('.sub.news .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
          $('.index .section.sec2 .rightImg>img.ball.pcImg').removeAttr('style');
          $('.index .section.sec2 .rightImg>img.ball.pcImg').removeClass('ani');

          var timer = null; 
          window.addEventListener("resize", function() {
            var w = window.innerWidth;
            if(w < 1600) {
              console.log("sdfsdfsdfsdf")
              $('.index .section.sec2 .rightImg>img.ball.pcImg').css({"display" : "none"})
            }     
          })  

        }


        // services 애니메이션
        if(index == 3) {
          $('.index header nav h1 a img').attr("src", "./img/logo_black.png")
          $('.index header nav ul li a').css({"color" : "rgba(30, 30, 30,0.5)"});
          $('.index header nav ul li:nth-child(3) a').css({"color" : "#1e1e1e"});
          $('.index header nav ul li:nth-child(3)').css({"border-bottom" : "solid 0.25rem #171717"})
          $('.index section .sec3 .ani_txt span').addClass('animation')
          if($(".index .sec3").hasClass("active")) {
            $.fn.fullpage.setAllowScrolling(true); 
          } 
          

          // pagination  
          $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('.index #fp-nav ul li:nth-child(3) a span').css({"background" : "#000"});
          $('.index #fp-nav ul li').css({"border" : "none"});
          $('.index #fp-nav ul li:nth-child(3)').css({"border" : "solid 0.1rem #000", "border-radius" : "50%"});
        } else {
          $('.index section .sec3 .ani_txt span').removeClass('animation')
          $('.index header nav ul li:nth-child(3)').css({"border" : "none"})
        }



        // contact 애니메이션
        if(index == 4) {
          $('.index header nav h1 a img').attr("src", "./img/logo.png")
          $('.index header nav ul li a').css({"color" : "rgba(255,255,255,0.5)"});
          $('.index header nav ul li:nth-child(4) a').css({"color" : "#fff"});
          $('.index header nav ul li:nth-child(4)').css({"border-bottom" : "solid 0.25rem #fff"})
          $('.index section .sec4 .ani_txt span').addClass('animation')

          // pagination  
          $('.index #fp-nav ul li a span').css({"background" : "#b2b2b2"});
          $('.index #fp-nav ul li:nth-child(4) span').css({"background" : "#fff"});
          $('.index #fp-nav ul li').css({"border" : "none"});
          $('.index #fp-nav ul li:nth-child(4)').css({"border" : "solid 0.1rem #fff", "border-radius" : "50%"});
          $('.index .topBtn').css({"display" : "block"})

          if($(".index .sec4").hasClass("active")) {
            $.fn.fullpage.setAllowScrolling(true); 
          } 

        } else {
          $('.index section .sec4 .ani_txt span').removeClass('animation')
          $('.index header nav ul li:nth-child(4)').css({"border" : "none"})
          $('.index .topBtn').css({"display" : "none"})
        }

        // if(!$(".fp-completely .swiper-wrapper").length > 0) $('#fullpage').off('touchmove'); 



        // if(swiper1) swiper1.mousewheel.enable();    
        // if(swiper4) swiper4.mousewheel.enable();    
        // if(swiper3)swiper3.mousewheel.enable();

        
        
        

        // if(swiper2) swiper2.mousewheel.enable();    

        
        // if($(".index .sec1").hasClass("active")) $.fn.fullpage.setAllowScrolling(false);
        // if(!$(".index .sec1").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); 

        // if(!$(".sub .sec1").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); 
        // if(!$(".sub .sec2").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); 
       
        






        if($(".sub .sec2").hasClass("active")) {
          swiper3.mousewheel.enable();
        }

        var timer = null; 
        window.addEventListener("resize", function() {
          // var w = window.innerWidth;
          // if(w > 1024 ) {
          //   $.fn.fullpage.moveTo(1)
          // }     
          clearTimeout(timer);
        	timer = setTimeout(function(){
        	document.location.reload();
        	}, 300);
        })




        // if(!$(".index .sec3").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); 
      },

    });           







    // index 메인 
    let mm = gsap.matchMedia();


    var length1 = $(".index .sec1 .swiper-slide").length;
    var swiper1 = new Swiper('.index .sec1Swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: false,
        speed: 700,
        slideToClickedSlide : true,
        mousewheel: true,
        direction: "vertical",
        allowTouchMove : true,
        breakpoints: {
          1439.33: {
            slideToClickedSlide : false,  //브라우저가 1439.33보다 클 때
            allowTouchMove : false
          },
        },
        on: {
          slideChangeTransitionStart: function () {
            mm.add("(min-width: 1400px)", () => {
              $('.swiperwrapper').hide(0);
            });
            
          },
          slideChange: function(){       
              var idx = this.activeIndex;
              if(this.activeIndex != 0 && idx != length1) $.fn.fullpage.setAllowScrolling(false);
              if(length1 == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false) //슬라이드가 2개밖에 없을때

          },  
          init: function () {
            var idx = this.activeIndex;
            if(idx == 0) {
              $('.index section .sec1 .ani_txt span').addClass('animation')
              $.fn.fullpage.setAllowScrolling(false);
            } else if(idx !== 0) {
              $.fn.fullpage.setAllowScrolling(true);
            }
          },

          slideChangeTransitionEnd: function(){
            var idx = this.activeIndex;

            if(idx == 1) {
              mm.add("(min-width: 1400px)", () => {
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
                setTimeout(() => $('.index section .sec1 .swiperwrapper.swiper_txt span').addClass('animation'), 400);
              });
              // indx 페이지
              $('.index section .sec1 .swiperwrapper.swiper_txt span').addClass('animation')
              $('.index section .sec1 .ani_txt span').removeClass('animation') 

            } else if(idx == 0) {
              console.log("에클 1슬라이드")
              $('.index section .sec1 .swiperwrapper.swiper_txt span').removeClass('animation')
              $('.index section .sec1 .ani_txt span').addClass('animation')
              
            } else if(idx !== 0 && idx !== 1) {
              console.log("다음 슬라이드 전환")
            }
            if(idx >= length1-1) {
              $.fn.fullpage.setAllowScrolling(true);
              console.log("sdfsfsdfsdsdfffffffffff")
            }
          },
      }, 
    }); 
    


    
    // services swiper slide
    var length2 = $(".mobileBoxcont .swiper-slide").length;
    var swiper2 = new Swiper('.index .sec2Swiper', {
        slidesPerView: "auto",
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
          560.33: {
            slidesPerView: 2, 
          },
        },
      
        // on: {
        //   init: function () {
        //     console.log("swiper 시작")
        //     $.fn.fullpage.setAllowScrolling(true) 
        //   },
        //   slideChange: function(){     
        //     console.log("swiper 실행중") 
        //     $.fn.fullpage.setAllowScrolling(true) 
        //   }, 
        // }
    });




    // var length2 = $(".mobileBoxcont .swiper-slide").length;
    // var swiper2 = new Swiper('.index .sec2Swiper', {
    //     slidesPerView: "auto",
    //     freeMode: false,
    //     slideToClickedSlide: true,
    //     grabCursor: true,
    //     observer: true,
    //     observeParents: true,
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //     breakpoints: {
    //       560.33: {
    //         slidesPerView: 2, 
    //       },
    //     },
      
    //     on: {

    //       slideChange: function(){       
    //         $.fn.fullpage.setAllowScrolling(true) 
    //       }, 
    //     }
    // });
    
    






    //sub 메인 swiper
    var length4 = $(".sub .sec1 .swiper-slide").length;
    var swiper4 = new Swiper('.sub .sec1Swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: false,
        speed: 700,
        slideToClickedSlide : true,
        mousewheel: true,
        direction: "vertical",
        allowTouchMove : true,
        breakpoints: {
          1439.33: {
            slideToClickedSlide : false,  //브라우저가 1439.33보다 클 때
            allowTouchMove : false,
          },
        },
        on: {
          slideChange: function(){       
              var idx = this.activeIndex;
              if(this.activeIndex != 0 && idx != length4) $.fn.fullpage.setAllowScrolling(false);
              if(length4 == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false) //슬라이드가 2개밖에 없을때
          },  
          init: function () {
            var idx = this.activeIndex;
            if(idx == 0) {
              setTimeout(() => $('.sub section .sec1 .ani_txt span').addClass('animation'), 500);
              $.fn.fullpage.setAllowScrolling(false);
            } else if(idx !== 0) {
              $.fn.fullpage.setAllowScrolling(true);
            }
          },

          slideChangeTransitionEnd: function(){
            var idx = this.activeIndex;
            if(idx == 1) {
              setTimeout(() => $('.sub section .sec1 .swiper_txt span').addClass('animation'), 100);
              $('.sub section .sec1 .ani_txt span').removeClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt01 span').removeClass('animation')

            } else if(idx == 0) {
              console.log("에클 1슬라이드")
              $('.sub section .sec1 .swiper_txt span').removeClass('animation')
              $('.sub section .sec1 .ani_txt span').addClass('animation')
            } else if(idx !== 0 && idx !== 1) {
              console.log("다음 슬라이드 전환")
            }
            if(idx >= length4-1) {

              $.fn.fullpage.setAllowScrolling(true);
            }
          },
          // touchMove: function(e) {        
          // var startY = e.touches.startY;
          // setTimeout(function(){
          //   if(startY > e.touches.currentY) swiper4.slideNext();  
          //   else swiper4.slidePrev();
          // },100);        
          // },
      }, 
    }); 

















    // sub 페이지 두번째 swiper
    var length3 = $(".sub .sec2 .swiper-slide").length;
    var swiper3 = new Swiper('.sub .sec2Swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: false,
        speed: 700,
        slideToClickedSlide : true,
        mousewheel: true,
        direction: "vertical",
        allowTouchMove : true,
        breakpoints: {
          1439.33: {
            slideToClickedSlide : false,  //브라우저가 1439.33보다 클 때
            allowTouchMove : false,
            touchRatio: 0
          },
        },
        on: {
          slideChange: function(){       
              var idx = this.activeIndex;
              console.log("idx" + idx)
              if(this.idx != 0 && idx != length3) {
                console.log("위로" + "idx" + idx + "length3" + length3)
                $.fn.fullpage.setAllowScrolling(false);
              }
              if(length3 == 3 && idx == 0) {
                console.log("아래로" + "idx" + idx + "length3" + length3)
                $.fn.fullpage.setAllowScrolling(false) 
              }
              if(idx == 0) {
                console.log("마우스휠방지")
                $('.sub.quiz .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').addClass('ani')
                $('.sub.every .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').addClass('ani')
                $('.sub.news .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').addClass('ani')
              }
              if(idx == 1) {
                console.log("서브 1")
                $('.sub.quiz .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(2) .slideWrap>div>div>div.rightImg>img').addClass('ani')
                $('.sub.every .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(2) .slideWrap>div>div>div.rightImg>img').addClass('ani')
                $('.sub.every .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(3) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
                $('.sub.news .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(2) .slideWrap>div>div>div.rightImg>img').addClass('ani')
                $('.sub.news .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(2) .slideWrap>div>div>div.rightImg>div>div').addClass('ani')
                $('.sub.news .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(3) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
                $('.sub.news .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(3) .slideWrap>div>div>div.rightImg>div>img').removeClass('ani')
                $('.sub.quiz .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(3) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
              } if(idx == 2) {
                console.log("서브3")
                $('.sub.every .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(3) .slideWrap>div>div>div.rightImg>img').addClass('ani')
                $('.sub.news .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(3) .slideWrap>div>div>div.rightImg>img').addClass('ani')
                $('.sub.news .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(3) .slideWrap>div>div>div.rightImg>div>img').addClass('ani')
                $('.sub.quiz .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(3) .slideWrap>div>div>div.rightImg>img').addClass('ani')
                $('.sub.quiz .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(4) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
              } else if (idx == 3) {
                $('.sub.quiz .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(3) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
                $('.sub.quiz .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(4) .slideWrap>div>div>div.rightImg>img').addClass('ani')
              }
          },  
          init: function () {
            var idx = this.activeIndex;
            console.log("마우스휠시작")
            if(idx == 0) {
              console.log("sub1")
              // setTimeout(() => $('.sub section .sec2 .ani_txt.ani_txt_fix span').addClass('animation'), 3000);
              $('.sub section .sec2 .ani_txt.ani_txt01 span').addClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt02 span').removeClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt03 span').removeClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt04 span').removeClass('animation')
            } 
          },
          // slideChangeTransitionStart: function () {
          //   var idx = this.activeIndex;
          //   console.log("slideChangeTransitionStart idx" + idx)
          //   if(idx == 0) {
          //     swiper4.mousewheel.disable();
          //   } else {
          //     swiper4.mousewheel.enable();
          //   }
          // },
          slideChangeTransitionEnd: function(){
            var idx = this.activeIndex;
            console.log("slideChangeTransitionEnd idx" + idx)
            if(idx == 0) {
              console.log("1번째 올라오는 슬라이드")
              // swiper3.mousewheel.disable();
              $('.sub section .sec2 .ani_txt.ani_txt01 span').addClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt02 span').removeClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt03 span').removeClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt04 span').removeClass('animation')
              $('.sub.quiz .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(2) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
              $('.sub.every .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(2) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
              $('.sub.news .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(2) .slideWrap>div>div>div.rightImg>div>div').removeClass('ani')
              $('.sub.news .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(2) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
            } else if(idx == 1) {
              console.log("2번째 슬라이드")
              $('.sub section .sec2 .ani_txt.ani_txt02 span').addClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt01 span').removeClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt03 span').removeClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt04 span').removeClass('animation')
              $('.sub.quiz .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
              $('.sub.every .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
              $('.sub.news .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
            } else if(idx == 2) {
              console.log("3번째 슬라이드")
              $('.sub section .sec2 .ani_txt.ani_txt03 span').addClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt01 span').removeClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt02 span').removeClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt04 span').removeClass('animation')
              $('.sub.quiz .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(2) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
              $('.sub.quiz .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(2) .slideWrap>div>div>div.rightImg>div>img').removeClass('ani')
              $('.sub.every .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(2) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
              $('.sub.news .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(2) .slideWrap>div>div>div.rightImg>img').removeClass('ani')
              $('.sub.news .section.sec2 .section_inner .swiper-container .swiper-wrapper .swiper-slide:nth-child(2) .slideWrap>div>div>div.rightImg>div>div').removeClass('ani')
            } else if (idx == 3) {
              $('.sub section .sec2 .ani_txt.ani_txt04 span').addClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt01 span').removeClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt02 span').removeClass('animation')
              $('.sub section .sec2 .ani_txt.ani_txt03 span').removeClass('animation')
            }
            else if(idx !== 0 && idx !== 1) {
              console.log("다음 슬라이드 전환")
            }
            if(idx >= length3-1) {
              $.fn.fullpage.setAllowScrolling(false);
            } 
            if(idx == 0) {
              $.fn.fullpage.setAllowScrolling(true);
            }
            // else if(!(idx == 0 || idx >= length3-1)) {
            //   $.fn.fullpage.setAllowScrolling(false);
            // }
          },
          // touchMove: function(e) {        
          // var startY = e.touches.startY;
          // setTimeout(function(){
          //   if(startY > e.touches.currentY) swiper3.slideNext();  
          //   else swiper3.slidePrev();
          // },100);        
          // },
      }, 
    }); 


    // 메인 우측 내비 sec1 클릭시 첫번째 슬라이드
    $('.index #fp-nav ul li:nth-child(1) a').click(function() { 
      swiper1.slideTo(0);
    })

  

   
      // window.addEventListener("resize", function() {
      //   console.log("scrolllllltop")
      //   $("html,body").animate({scrollTop:"0"});   
      // })
  
    



  










  });

  


  // 브라우저 resize 처리
  // window.addEventListener("resize", function() {
    
  //   var w = window.innerWidth;
  //   if(w > 1024 ) {
  //     $('div.fp-scroller').css('transform','translate(0px, 0px) translateZ(0px)');
  //     $.fn.fullpage.moveTo(0)
  //   }
    
  // })



  





