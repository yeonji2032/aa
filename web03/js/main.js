$(function(){

    $("#wrap").fullpage({
        navigation:true,
        //sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
        afterLoad: function(origin, destination, direction){
            $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
        },
    });




})            