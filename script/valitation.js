$(document).ready(()=>{

    $('#saveChanged').click(()=>{
        if($('.valid-password').length > 0){
            for(let i=0; i < $('.valid-password').length;i++){
                if(validPassword($('.valid-password').eq(i).val())){
                    $('.error-password').eq(i).removeClass('active')
                    $('.valid-password').eq(i).removeClass('error') 
                }else{
                    $('.error-password').eq(i).addClass('active')
                    $('.valid-password').eq(i).addClass('error')
                }
                if($('.valid-password').eq(i).is('#newPassword')){
                   
                    if($('#newPassword').val() == $('#againPassword').val()){
                        $('.error-againPassword').removeClass('active');
                        $('#againPassword').removeClass('error')
                    }else{
                        $('.error-againPassword').addClass('active');
                        $('#againPassword').addClass('error');
                    }
                }
                
            }
        }
        if($('.valid-login').length > 0){
            const reg =new RegExp('^[a-zA-Z0-9]+$');
            if($('.valid-login').val().length > 2 && reg.test($('.valid-login').val())){
                console.log($('.valid-login').val().length)
                $('.error-login').removeClass('active')
                $('.valid-login').removeClass('error')
            }else{
                $('.error-login').addClass('active')
                $('.valid-login').addClass('error')
            }

        }
    })

    function validPassword(password){
        return /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(password)
    }

})

