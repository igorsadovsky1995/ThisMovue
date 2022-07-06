$(document).ready(function(){
    $('.movie__img').css({'background':'url("'+ $('.movie__img img').attr('src')+'")','background-position':'center','background-size':'cover'});

    
    $('.info-movie__help').click(function(){
        $('.movie-box__popup').toggleClass('open');
    })

    var time=0;
    function timer(){
        
        $('#time').html(''+time+'');
        time++;
        time <= 10 ? setTimeout(timer,1000):10;
    }
    setTimeout(timer,1000);


    let count=0;
    
    $('.setting-menu__button-prev').click(function (){

        $('.setting-menu__col').hide()
        count = count < 0 ? $('.setting-menu__col').length-2 : count-1;;

        $('.setting-menu__col').eq(count).show();
    })

    $('.setting-menu__button-next').click(function(){
        $('.col-setting__sub').hide()
        count = count > $('.col-setting__sub').length-2 ? 0:count+1;
        
        $('.col-setting__sub').eq(count).show();
    })

    $('.setting-menu__item').click(function(){
        $('.setting-menu__item').removeClass('open')
        $('.setting-menu__col').removeClass('open')
        $('.setting-menu__col').eq($(this).index()).addClass('open')
        $(this).addClass('open')
        $(this).hasClass('leng') ? $('.setting-menu__button').hide():$('.setting-menu__button').show()
    })

    $('.col-setting__button').click(function(){
        $('.col-setting__sub').removeClass('active')
        array.mode=$(this).parents('.col-setting__sub').index()
        
        $('.col-setting__sub').eq(array.mode).addClass('active')
       
        })
    $('.leng-setting__item').click(function(){
        $('.leng-setting__item').removeClass('active')
        array.lang=$(this).index();
        
        $('.leng-setting__item').eq(array.lang).addClass('active')
        
    })
   

   
})

