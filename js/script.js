console.clear();

$(window).scroll(function () {
  var $scrollTop = $(this).scrollTop();
  console.log($scrollTop);
  
	if($scrollTop > 0) {
		
		$("header").css({"background-color": "rgba(255, 255, 255, 0.7)"});
		
		$(".menu-wrap").css({"margin-top":"20px"});
		
		$(".menu-wrap > .left-logo-wrap > .a_two").addClass("active");
		
		$(".menu-wrap > .left-logo-wrap > a").addClass("active");
		
		$(".menu-2-wrap > .left-logo-wrap-2 > .a_two").addClass("active");
		
		$(".menu-2-wrap > .left-logo-wrap-2 > a").addClass("active");
		
		$(".menu-2-wrap").addClass("active");
		
		
		$(".menu-2-wrap > .right-menu-2 > .hamburger-menu > .ham-menu-wrap > p").css({"background-color":"rgb(0, 0, 0)"});
		
		
		
		$(".menu-wrap > .right-menu > .ul-wrap > ul > li").addClass("active");
	
		
		$(".menu-wrap > .right-menu > .ul-wrap > ul > li").css({"font-size":"16px"});
		
		$(".menu-wrap > .right-menu > .ul-wrap > ul > li:nth-of-type(2) > ul").addClass("active");
		
		$("header").css({"border-bottom": "1px solid #afafaf"});
		
		
		$(".menu-wrap > .right-menu").css({"right": "-2%"});
	
		
		$(".menu-wrap > .right-menu > .ul-wrap > ul > li:nth-of-type(2) > ul > li").css({"margin-top":"10%"});
		
		if($scrollTop > 1100){
			$(".menu-2-wrap").addClass("active2");
			
			
		}
		
		else if($scrollTop <= 1100){
			$(".menu-2-wrap").removeClass("active2");
			
			 $(".section3 > .text-btn-2").css({"position" : "absolute"});
			
			 $(".section3 > .text-btn-2").css({"border-bottom" : "0px solid #cccccc"});
		}
		
		if(($scrollTop > 1100) && ($scrollTop < 10447)){
		   $(".section3 > .text-btn-2").css({"position" : "fixed"});
			
			 $(".section3 > .text-btn-2").css({"border-bottom" : "1px solid #cccccc"});
			
		   
		   }
		
		else if($scrollTop >= 10447){
			
			$(".section3 > .text-btn-2").css({"position" : "absolute"});
			$(".menu-2-wrap").removeClass("active2");
			
			
		}
		
	if(($scrollTop > 0) && ($scrollTop <= 3350)){
		  $(".section3 > .text-btn-2 > .top-text-btn > span").addClass("active");
		   
		   }
		
		else{
			$(".section3 > .text-btn-2 > .top-text-btn > span").removeClass("active");
		}
		
		
		if(($scrollTop >= 3350) && ($scrollTop <= 5355)){
		  $(".section3 > .text-btn-2 > .mid-text-btn > span").addClass("active");
		   
		   }
		
		else{
			$(".section3 > .text-btn-2 > .mid-text-btn > span").removeClass("active");
		}
		
		if(($scrollTop >= 5355) && ($scrollTop <= 10447)){
		  $(".section3 > .text-btn-2 > .btm-text-btn > span").addClass("active");
		   
		   }
		
		else{
			$(".section3 > .text-btn-2 > .btm-text-btn > span").removeClass("active");
		}
		
	}
	
	else{
		$("header").css({"background-color": "rgba(255, 255, 255, 0)"});
		
		$(".menu-wrap > .left-logo-wrap > .a_two").removeClass("active");
		
		$(".menu-wrap > .left-logo-wrap > a").removeClass("active");
		
		
		$(".menu-2-wrap").removeClass("active");
		
		$(".menu-2-wrap > .left-logo-wrap-2 > .a_two").removeClass("active");
		
		$(".menu-2-wrap > .left-logo-wrap-2 > a").removeClass("active");
		
		
		$(".menu-wrap").css({"margin-top":"32px"});
		
		$(".menu-wrap > .right-menu > .ul-wrap > ul > li").css({"font-size":"20px"});
		
		$(".menu-wrap > .right-menu > .ul-wrap > ul > li").removeClass("active");
	
		$(".menu-wrap > .right-menu > .ul-wrap > ul > li:nth-of-type(2) > ul").removeClass("active");
		
		$("header").css({"border-bottom": "none"});
		
		$(".menu-wrap > .right-menu").css({"right": "2%"});
		
		
		
		$(".menu-wrap > .right-menu > .ul-wrap > ul > li:nth-of-type(2) > ul > li").css({"margin-top":"4%"});
		
		
		$(".menu-2-wrap > .right-menu-2 > .hamburger-menu > .ham-menu-wrap > p").css({"background-color":"rgb(255, 255, 255)"});
		
	
		
	
	}
});

$(document).ready(function(){
	
	$(".slide-test").slick({
		slide: "div",
		arrows:true,
		dots:false,
		infinite: true,
		autoplay: true,
		autoplaySpeed:3000,
		fade:true,
		prevArrow:"<div class='slick-prev-posi'><img src='./img/prev.png'></div>",
		nextArrow:"<div class='slick-next-posi' href='#'><img src='./img/next.png'></div>",
		
        
    });
	
	
	
	
	$(".menu-2-wrap > .right-menu-2 > .hamburger-menu").click(function(){
		$(this).toggleClass("active");
		
		$(".active-menu").toggleClass("active");
		
		
	});
																
    
   

    $(".section3 > .text-btn > .top-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 1850 });
        
    });
	
	 $(".section3 > .text-btn-2 > .top-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 755 });
        
    });
	
	 $(".section3 > .text-btn-2 > .mid-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 2654 });
        
		 
		  
		 
    });
	
	 $(".section3 > .text-btn-2 > .btm-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 4760 });
        
    });
    
     $(".section4 > .left-menu-bar > .top-menu").click(function(){
        
          $("html, body").animate({ scrollTop: 1850 });
        
    });
    
         $(".section5 > .five-text-box > .five-top-text").click(function(){
        
          $("html, body").animate({ scrollTop: 1850 });
        
    });
    
     $(".section5 > .five-text-2 > .five-top-text-2").click(function(){
        
          $("html, body").animate({ scrollTop: 1850 });
        
    });
	
	  $(".section6 > .six-text-box > .top-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 1850 });
        
    });
	
	
	 $(".section7 > .seven-text-box > .top-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 1850 });
        
    });
	
	
	 $(".section8 > .eight-text-box > .top-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 1850 });
        
    });
	
	 $(".section9 > .nine-text-box > .top-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 1850 });
        
    });
	
	
	
	
	 $(".section3 > .text-btn > .mid-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 3683 });
        
    });
	
	 $(".section4 > .left-menu-bar > .mid-menu").click(function(){
        
          $("html, body").animate({ scrollTop: 3683  });
        
    });
	
	
	     $(".section5 > .five-text-box > .five-mid-text").click(function(){
        
          $("html, body").animate({ scrollTop: 3683 });
        
    });
	
	  $(".section5 > .five-text-2 > .five-mid-text-2").click(function(){
        
          $("html, body").animate({ scrollTop: 3683 });
        
    });
	
	  $(".section6 > .six-text-box > .mid-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 3683 });
        
    });
	
	
	 $(".section7 > .seven-text-box > .mid-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 3683 });
        
    });
	
	
	 $(".section8 > .eight-text-box > .mid-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 3683 });
        
    });
	
	 $(".section9 > .nine-text-box > .mid-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 3683 });
        
    });
	
	
	 $(".section3 > .text-btn > .btm-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 6181 });
        
    });
	
	 $(".section4 > .left-menu-bar > .btm-menu").click(function(){
        
          $("html, body").animate({ scrollTop: 6181  });
        
    });
	
	
	     $(".section5 > .five-text-box > .five-btm-text").click(function(){
        
          $("html, body").animate({ scrollTop: 6181 });
        
    });
	
	  $(".section5 > .five-text-2 > .five-btm-text-2").click(function(){
        
          $("html, body").animate({ scrollTop: 6181 });
        
    });
	
	  $(".section6 > .six-text-box > .btm-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 6181 });
        
    });
	
	
	 $(".section7 > .seven-text-box > .btm-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 6181 });
        
    });
	
	
	 $(".section8 > .eight-text-box > .btm-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 6181 });
        
    });
	
	 $(".section9 > .nine-text-box > .btm-text-btn").click(function(){
        
          $("html, body").animate({ scrollTop: 6181 });
        
    });
	
	
    
     var controller = new ScrollMagic.Controller();
	
	var tween2 = TweenMax.to('.main-2-content > .move-wrap > .move-text', 1 , {
       y:-300,
	   opacity:1
    });

    var scene2 = new ScrollMagic.Scene({
	triggerElement: ".main-2-content",
    triggerHook:  0.7 , 
    offset: 100,
	duration: "20%",
  })

 .setTween(tween2) 
 .addTo(controller) 
 
	
var tween3 = TweenMax.to('.main-2-content > .move-wrap > .img-box', 1 , {
		
       y:-300,
	   opacity:1,
	
    });

    var scene3 = new ScrollMagic.Scene({
	triggerElement: ".main-2-content",
    triggerHook:  0.7 , 
    offset: 200,
	duration: "20%",
  })

 .setTween(tween3) 
 .addTo(controller) 
 
    
     
    setInterval(function(){
        $(".main-2-content > .down").toggleClass("active");
        
    },600)
	
    
    
    var tween4 = TweenMax.to('.section3 > .move-img1 > .img-box', 1 , {
		
       y:-90,
	   opacity:1,
	
    });

    var scene4 = new ScrollMagic.Scene({
	triggerElement: ".section3",
    triggerHook:  0.7 , 
    offset: -100,
	duration: "30%",
  })

 .setTween(tween4) 
 .addTo(controller) 
	
	 var tween4_1 = TweenMax.to('.section3 > .move-img1 > .right-text-box', 1 , {
		
       y:-90,
	   opacity:1,
	
    });

    var scene4_1 = new ScrollMagic.Scene({
	triggerElement: ".section3",
    triggerHook:  0.7 , 
    offset: 0,
	duration: "30%",
  })

 .setTween(tween4_1) 
 .addTo(controller) 
	
	
	
	  var tween4_2 = TweenMax.to('.section3 > .move-img1 > .img-box_1', 1 , {
		
       y:-140,
	   opacity:1,
	
    });

    var scene4_2 = new ScrollMagic.Scene({
	triggerElement: ".section3",
    triggerHook:  0.7 , 
    offset: 120,
	duration: "30%",
  })

 .setTween(tween4_2) 
 .addTo(controller) 
	
	 var tween4_3 = TweenMax.to('.section3 > .move-img1 > .right-text-box_2', 1 , {
		
       y:-90,
	   opacity:1,
	
    });

    var scene4_3 = new ScrollMagic.Scene({
	triggerElement: ".section3",
    triggerHook:  0.7 , 
    offset: 0,
	duration: "30%",
  })

 .setTween(tween4_3) 
 .addTo(controller) 
	
	
	
	var tween5 = TweenMax.to('.section3 > .move-img2', 1 , {
		
       y:-120,
	   opacity:1,
	
    });

    var scene5 = new ScrollMagic.Scene({
	triggerElement: ".section3",
    triggerHook:  0.7 , 
    offset: 400,
	duration: "30%",
  })

 .setTween(tween5) 
 .addTo(controller) 
	
		var tween5_1 = TweenMax.to('.section3 > .move-img2-2', 1 , {
		
       y:-250,
	   opacity:1,
	
    });

    var scene5_1 = new ScrollMagic.Scene({
	triggerElement: ".section3",
    triggerHook:  0.7 , 
    offset: 600,
	duration: "20%",
  })

 .setTween(tween5_1) 
 .addTo(controller) 
 
 
	
	var tween6 = TweenMax.to('.section3 > .move-img3', 1 , {
		
       y:-200,
	   opacity:1,
	
    });

    var scene6 = new ScrollMagic.Scene({
	triggerElement: ".section3",
    triggerHook:  0.7 , 
    offset: 940,
	duration: "30%",
  })

 .setTween(tween6) 
 .addTo(controller) 
	
	
	var tween6_1 = TweenMax.to('.section3 > .move-img3-2', 1 , {
		
       y:-400,
	   opacity:1,
	
    });

    var scene6_1 = new ScrollMagic.Scene({
	triggerElement: ".section3",
    triggerHook:  0.7 , 
    offset: 1130,
	duration: "15%",
  })

 .setTween(tween6_1) 
 .addTo(controller) 


 
	
	
	var tween7 = TweenMax.to('.section4 > .center-text', 1 , {
		
       y:-200,
	   opacity:1,
	
    });

    var scene7 = new ScrollMagic.Scene({
	triggerElement: ".section4",
    triggerHook:  0.7 , 
    offset: -100,
	duration: "40%",
  })

 .setTween(tween7) 
 .addTo(controller) 
	
	
		var tween7_1 = TweenMax.to('.section4 > .center', 1 , {
		
       y:-200,
	   opacity:1,
	
    });

    var scene7_1 = new ScrollMagic.Scene({
	triggerElement: ".section4",
    triggerHook:  0.7 , 
    offset: -100,
	duration: "40%",
  })

 .setTween(tween7_1) 
 .addTo(controller) 
	
	
	var tween8 = TweenMax.to('.section4 > .four-img', 1 , {
		
       y:-200,
	   opacity:1,
	
    });

    var scene8 = new ScrollMagic.Scene({
	triggerElement: ".section4",
    triggerHook:  0.7 , 
    offset: 150,
	duration: "40%",
  })

 .setTween(tween8) 
 .addTo(controller) 

	var tween9 = TweenMax.to('.section5 > .five-title-text', 1 , {
		
       y:-100,
	   opacity:1,
	
    });

    var scene9 = new ScrollMagic.Scene({
	triggerElement: ".section5",
    triggerHook:  0.7 , 
    offset: -100,
	duration: "40%",
  })

 .setTween(tween9) 
 .addTo(controller) 
	
	
	var tween10 = TweenMax.to('.section5 > .phone-img', 1 , {
		
       y:-100,
	   opacity:1,
	
    });

    var scene10 = new ScrollMagic.Scene({
	triggerElement: ".section5",
    triggerHook:  0.7 , 
    offset: 130,
	duration: "40%",
  })

 .setTween(tween10) 
 .addTo(controller) 
 
	
	var tween10_1 = TweenMax.to('.section5 > .phone-img > .phone_1', 1 , {
		
       y:-100,
	   opacity:1,
	
    });

    var scene10_1 = new ScrollMagic.Scene({
	triggerElement: ".section5",
    triggerHook:  0.7 , 
    offset: 130,
	duration: "20%",
  })

 .setTween(tween10_1) 
 .addTo(controller) 
	
	
	var tween10_2 = TweenMax.to('.section5 > .phone-img > .phone_4', 1 , {
		
       y:-100,
	   opacity:1,
	
    });

    var scene10_2 = new ScrollMagic.Scene({
	triggerElement: ".section5",
    triggerHook:  0.7 , 
    offset: 500,
	duration: "20%",
  })

 .setTween(tween10_2) 
 .addTo(controller) 
 
	
	
	
	var tween11 = TweenMax.to('.section5 > .mall-wrap > .mall-image', 1 , {
		
      
	   opacity:1,
	
    });

    var scene11 = new ScrollMagic.Scene({
	triggerElement: ".section5",
    triggerHook:  0.7 , 
    offset: 1400,
	duration: "30%",
  })

 .setTween(tween11) 
 .addTo(controller) 
	
	
	
	var tween11_1 = TweenMax.to('.section5 > .mall-wrap > .mall-image-2', 1 , {
		
      
	   opacity:1,
	
    });

    var scene11_1 = new ScrollMagic.Scene({
	triggerElement: ".section5",
    triggerHook:  0.7 , 
    offset: 1510,
	duration: "8%",
  })

 .setTween(tween11_1) 
 .addTo(controller) 
	
	
	var tween11_2 = TweenMax.to('.section5 > .mall-wrap > .circle-box', 1 , {
		
      
	   opacity:1,
	
    });

    var scene11_2 = new ScrollMagic.Scene({
	triggerElement: ".section5",
    triggerHook:  0.7 , 
    offset: 1500,
	duration: "8%",
  })

 .setTween(tween11_2) 
 .addTo(controller) 
	
	
	
	var tween12 = TweenMax.to('.section5 > .mall-wrap > .text-box', 1 , {
		
      y:-200,
	   opacity:1,
	
    });

    var scene12 = new ScrollMagic.Scene({
	triggerElement: ".section5",
    triggerHook:  0.7 , 
    offset: 1800,
	duration: "20%",
  })

 .setTween(tween12) 
 .addTo(controller) 
	
	
	var tween12_1 = TweenMax.to('.section5 > .mall-wrap > .mall-text-2', 1 , {
		
      y:-150,
	   opacity:1,
	
    });

    var scene12_1 = new ScrollMagic.Scene({
	triggerElement: ".section5",
    triggerHook:  0.7 , 
    offset: 1100,
	duration: "10%",
  })

 .setTween(tween12_1) 
 .addTo(controller) 

	 
	
		
	var tween13 = TweenMax.to('.section6 > .main-text', 1 , {
		
      y:-300,
	   opacity:1,
	
    });

    var scene13 = new ScrollMagic.Scene({
	triggerElement: ".section6",
    triggerHook:  0.7 , 
    offset: 150,
	duration: "40%",
  })

 .setTween(tween13) 
 .addTo(controller) 
	
	
	var tween13_1 = TweenMax.to('.section6 > .main-text-2', 1 , {
		
      y:-50,
	   opacity:1,
	
    });

    var scene13_1 = new ScrollMagic.Scene({
	triggerElement: ".section6",
    triggerHook:  0.7 , 
    offset: 150,
	duration: "5%",
  })

 .setTween(tween13_1) 
 .addTo(controller) 
	
	
	
 

	var tween14 = TweenMax.to('.section7 > .main-coupon', 1 , {
		
      y:-200,
	  opacity:1,
	
    });

    var scene14 = new ScrollMagic.Scene({
	triggerElement: ".section7",
    triggerHook:  0.7 , 
    offset: -30,
	duration: "30%",
  })

 .setTween(tween14) 
 .addTo(controller) 
	
	
		var tween15 = TweenMax.to('.section7 > .img-box-wrap-7', 1 , {
		
      y:-200,
	  opacity:1,
	
    });

    var scene15 = new ScrollMagic.Scene({
	triggerElement: ".section7",
    triggerHook:  0.7 , 
    offset: 100,
	duration: "30%",
  })

 .setTween(tween15) 
 .addTo(controller) 
	
		
	
	var tween16 = TweenMax.to('.section8 > .eight-main-text', 1 , {
		
      y:-140,
	  opacity:1,
	
    });

    var scene16 = new ScrollMagic.Scene({
	triggerElement: ".section8",
    triggerHook:  0.7 , 
    offset: 50,
	duration: "10%",
  })

 .setTween(tween16) 
 .addTo(controller) 
 
	
	var tween17 = TweenMax.to('.section8 > .image-coupon', 1 , {
		
      y:-140,
	  opacity:1,
	
    });

    var scene17 = new ScrollMagic.Scene({
	triggerElement: ".section8",
    triggerHook:  0.7 , 
    offset: 130,
	duration: "10%",
  })

 .setTween(tween17) 
 .addTo(controller) 
	
	
	
	var tween18 = TweenMax.to('.section9 > .coupon-event > .event-img', 1 , {
		
      y:-140,
	  opacity:1,
	
    });

    var scene18 = new ScrollMagic.Scene({
	triggerElement: ".section9",
    triggerHook:  0.7 , 
    offset: 50,
	duration: "15%",
  })

 .setTween(tween18) 
 .addTo(controller) 
 
	
	var tween18_1 = TweenMax.to('.section9 > .coupon-event > .event-img > img:nth-of-type(2)', 1 , {
		
      y:-60,
	  opacity:1,
	
    });

    var scene18_1 = new ScrollMagic.Scene({
	triggerElement: ".section9",
    triggerHook:  0.7 , 
    offset: 190,
	duration: "15%",
  })

 .setTween(tween18_1) 
 .addTo(controller) 
 
	
	
	var tween19 = TweenMax.to('.section9 > .coupon-event > .event-text', 1 , {
		
      y:-210,
	  opacity:1,
	
    });

    var scene19 = new ScrollMagic.Scene({
	triggerElement: ".section9",
    triggerHook:  0.7 , 
    offset: 170,
	duration: "15%",
  })

 .setTween(tween19) 
 .addTo(controller) 
 
	
	var tween19_1 = TweenMax.to('.section9 > .coupon-event > .event-text > h1:nth-of-type(2)', 1 , {
		
      y:-70,
	  opacity:1,
	
    });

    var scene19_1 = new ScrollMagic.Scene({
	triggerElement: ".section9",
    triggerHook:  0.7 , 
    offset: 100,
	duration: "15%",
  })

 .setTween(tween19_1) 
 .addTo(controller) 
 
	
	
	
	var tween20 = TweenMax.to('.section9 > .web-pos', 1 , {
		
      y:-220,
	  opacity:1,
	
    });

    var scene20 = new ScrollMagic.Scene({
	triggerElement: ".section9",
    triggerHook:  0.7 , 
    offset: 660,
	duration: "15%",
  })

 .setTween(tween20) 
 .addTo(controller) 
 
	
		var tween21 = TweenMax.to('.section9 > .customer', 1 , {
		
      y:-220,
	  opacity:1,
	
    });

    var scene21 = new ScrollMagic.Scene({
	triggerElement: ".section9",
    triggerHook:  0.7 , 
    offset: 980,
	duration: "15%",
  })

 .setTween(tween21) 
 .addTo(controller) 
 
	
	var tween22 = TweenMax.to('.section9 > .shop-wrap', 1 , {
		
      y:-220,
	  opacity:1,
	
    });

    var scene22 = new ScrollMagic.Scene({
	triggerElement: ".section9",
    triggerHook:  0.7 , 
    offset: 1550,
	duration: "15%",
  })

 .setTween(tween22) 
 .addTo(controller) 
 
	
	
	var tween23 = TweenMax.to('.section9 > .manager-wrap', 1 , {
		
      y:-220,
	  opacity:1,
	
    });

    var scene23 = new ScrollMagic.Scene({
	triggerElement: ".section9",
    triggerHook:  0.7 , 
    offset: 1900,
	duration: "15%",
  })

 .setTween(tween23) 
 .addTo(controller) 

	
	
	var tween24 = TweenMax.to('.section10 > .main-text', 1 , {
		
      y:-100,
	  opacity:1,
	
    });

    var scene24 = new ScrollMagic.Scene({
	triggerElement: ".section10",
    triggerHook:  0.7 , 
    offset: 100,
	duration: "15%",
  })

 .setTween(tween24) 
 .addTo(controller) 
 
	
	var tween25 = TweenMax.to('.section10 > .ten-img', 1 , {
		
      y:-50,
	  opacity:1,
	
    });

    var scene25 = new ScrollMagic.Scene({
	triggerElement: ".section10",
    triggerHook:  0.7 , 
    offset: 250,
	duration: "15%",
  })

 .setTween(tween25) 
 .addTo(controller) 

	
	
	var tween26 = TweenMax.to('.section12 > .main-enbor', 1 , {
		
      y:-150,
	  opacity:1,
	
    });

    var scene26 = new ScrollMagic.Scene({
	triggerElement: ".section12",
    triggerHook:  0.7 , 
    offset: 350,
	duration: "15%",
  })

 .setTween(tween26) 
 .addTo(controller) 
 
	
	var tween26_1 = TweenMax.to('.section12 > .main-enbor > h1:nth-of-type(2)', 1 , {
		
      y:-50,
	  opacity:1,
	
    });

    var scene26 = new ScrollMagic.Scene({
	triggerElement: ".section12",
    triggerHook:  0.7 , 
    offset: 100,
	duration: "15%",
  })

 .setTween(tween26) 
 .addTo(controller) 
 

	$('.section13 > span').click(function(){
		
		var $click_btn = $(this);
        var find_active = $('.slide-content.active');
        var find_btn = $click_btn.hasClass('left-btn');
		
		
		if(find_btn){
			var $next = find_active.prev();
			
		}
		
		else{
			var $next = find_active.next();
		
		}
		
		
		if($next.length == 0){
		if(find_btn){
			$next = find_active.parent().children().last();
			
		}
		
		else{
			$next = find_active.parent().children().first();
			
		}
		}
		
		console.log($next.length);
	
	  find_active.removeClass('active');
      $next.addClass('active');
		
		
	});
	
});
