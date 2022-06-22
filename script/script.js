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

})

