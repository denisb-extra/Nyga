$(document).ready(function ($) {
    window.addEventListener('scroll', onScroll);
    function onScroll(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            shrinkOn = 30;
        if (distanceY > shrinkOn) {
            $("header" ).addClass("scrolled");
        } else {
            $("header" ).removeClass("scrolled");
        }
    }
    onScroll();
    
    
    $(".mobile_menu").simpleMobileMenu({
        "menuStyle": "slide",
    });

    $(".panel-side .title").on("click", function(){
        $(".panel-side").toggleClass("open");
    });

    $(document).click(function(event) { 
        $target = $(event.target);
        if(!$target.closest('.panel-side').length ) {
            $(".panel-side").removeClass("open");   
        }
    });

    $(".share .title").on("click", function(){
        var icons = $(this).parent().find(".icons-wrapper");
        icons.slideToggle();
    });

    $(".wrapper-hidden .heading").on('click', function() {
        var content = $(this).parent().find(".content");
        content.slideToggle();
    });

    $(".check-mark").on('click', function(event) {
        $(this).toggleClass('active');
    });

    document.addEventListener( 'wpcf7mailsent', function( event ) {
        var inputs = event.detail.inputs;
        thankyouPage = getFieldValueByName(inputs, "thankyou-page");
        if(thankyouPage) window.location = thankyouPage;
    }, false );


    $(".variation-selector .title").on('click', function(event) {
        var dropdown = $(this).parent().find(".dropdown");
        dropdown.slideToggle('fast');
    });

    $(".variation-selector .dropdown .item").on('click', function(event) {
        var dropdown = $(this).closest(".dropdown");
        dropdown.find(".item").removeClass("active");
        $(this).addClass('active');
        dropdown.slideUp('fast');

        var html = $(this).html();
        selector = $(this).closest(".variation-selector");
        selector.find(".title .item").html(html);
    });


});

function getFieldValueByName(ar, name){
    var result = "";
    ar.forEach(function(item) {
        if(item.name == name) result = item.value;
    });
    return result;
}