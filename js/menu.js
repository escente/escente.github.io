//responsive menu
function menu(){
    $('.main-navigation').click(function(e){ 
        e.stopPropagation();
    });

    $('a.icon').click(function(){
        $('.main-navigation').toggleClass('responsive');
    });

    $(document).click(function(){  
        $('.main-navigation').removeClass('responsive'); 

    });


    //dropdown menu
    $('.dropdown').click(function(e){ 
        e.stopPropagation();
    });


    $('#comic-link').click(function(){
        $('#comic-menu').slideDown();
    });

    $(document).click(function(){  
        $('.drop-menu').slideUp(); 

    });

    var delay=3000, setTimeoutConst;
    $('#comic-menu').hover(function(){
        setTimeoutConst = setTimeout(function(){
            $('#terribad').slideDown(2000);
        }, delay);
    },function(){
        clearTimeout(setTimeoutConst );
    });


    $('#comic-menu').mouseleave(function(){
        $('#terribad').slideUp();
    });
};