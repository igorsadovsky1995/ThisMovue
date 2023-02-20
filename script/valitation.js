$(document).ready(()=>{
    $('#saveChanged').click(()=>{
        $('.user-form__form').addClass('valid')
        valid();
    });
    $('.user-form__form input').on('input',()=>{
        if($('.user-form__form').hasClass('valid')){
            valid();
        }
    });
    function valid(){
        if($('.valid-email').length > 0){
            let emailRes =/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($('.valid-email').val())
            checkError($('.valid-email'),emailRes)
        }
        if($('.valid-login').length > 0){
            const reg =new RegExp('^[a-zA-Z0-9]+$');
            let loginRes= $('.valid-login').val().length > 2 && reg.test($('.valid-login').val());
                checkError($('.valid-login'),loginRes)
        }

        if($('.valid-password').length > 0){
            for(let i=0; i < $('.valid-password').length;i++){
                let resPas = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test($('.valid-password').eq(i).val())
                checkError($('.valid-password').eq(i),resPas)
                if($('.valid-input').eq(i).is('#newPassword')){
                    if($('.valid-input').eq(i).val() == $('#newPassword').val()){
                        checkError($('#newPassword'),true)
                    }else{
                        checkError($('#newPassword'),false)
                    }
                }  
            }
        }        
    }
    function checkError(element,resultValid){
        if(resultValid){
            if($(`.${$(element).attr('data-error')}`).hasClass('active')){
                $(`.${$(element).attr('data-error')}`).removeClass('active')
            }
            if($(element).hasClass('error')){
                $(element).removeClass('error')
            }
            console.log('work')
            if($('.user-form__form').find('.error').length < 1){
                $('#saveChanged').attr('disabled', false);
            }
        }else{
            $(`.${$(element).attr('data-error')}`).addClass('active')
            $(element).addClass('error')
            $('#saveChanged').attr('disabled', true);
        }
    }
})

