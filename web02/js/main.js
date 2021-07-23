$(function(){

    //스크롤 내릴 때 메뉴배경색 변경
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 50) {  //변경 높이..만약 해당 높이즘 되면?
            $("#Header .container").css('background-color', 'white'); //설정한 높이 지나서 변경될 색//
        } else {
            $("#Header .container").css('background-color', 'rgba(255, 255, 255, 0.5)'); //해당 높이 되기 전 색깔 //
        }
    });
    
    $(".main_slider").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,    
    });
    //탭과 슬릭 같이 이용시 슬라이더 이미지 등 넓이 깨지는 오류 발생 
    //억지로 수동으로 뭔가 맞춰야 하는듯..우산 탭만 두자
    

    $(".tab_tit li").on("click", function(){
        var idx=$(this).index();
        $(".tab_con>div").eq(idx).addClass("on").siblings().removeClass("on");
        $(this).addClass("on").siblings().removeClass("on");
        
    });

    $(".link select").on("change", function(){
    var lik=$(this).val();
    window.open(lik)
    if(lik) window.open(lik)
    });


    $(".mopen img").on("click", function(){
        $("nav").toggleClass("on");
    });



});
