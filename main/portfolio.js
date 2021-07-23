$(function(){
    ///////////////////////////////
    
    $("#main").fullpage({
        anchors:['xm01', 'xm02', 'xm03', 'xm04', 'xm05'],
        afterLoad: function(origin, destination, direction){
            $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
            $("nav li").eq(destination.index).addClass("on").siblings().removeClass("on");
        },
    });
    
    $("#mopen").on("click", function(){
        $(this).toggleClass("on");
        $("#cover_nav").toggleClass("on");
    });
        
    
    $("#cover_nav .link a").on("click", function(){
        $("#cover_nav").removeClass("on");
        $("#mopen").removeClass("on");
    });
    



   
    //pf01 방향버튼
    $(".xi-angle-left").on("click", function(){
        $(".pt_slider").slick("slickPrev");
    });
    $(".xi-angle-right").on("click", function(){
        $(".pt_slider").slick("slickNext");
    });
     //pf03 방향버튼
    $(".xi-arrow-left").on("click", function(){
        $(".pt_slider").slick("slickPrev");
    });
    $(".xi-arrow-right").on("click", function(){
        $(".pt_slider").slick("slickNext");
    });












    /////////////
    $(".pf02 .xi-pause").on("click", function(){
        $(".p02_video").trigger("pause");
    });
    
    $(".pf02 .xi-play").on("click", function(){
        $(".p02_video").trigger("play");
    });
    

    $(".pt_slider").slick({
        arrows:false,
        dots:true,
        
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,          }
            },
          ]
    });







    
    
    
    
    
    //////////////////////////////
    });