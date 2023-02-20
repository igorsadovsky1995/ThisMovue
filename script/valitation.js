$(document).ready(()=>{
    $('#saveChanged').click((e)=>{
        e.preventDefault();
        if($('.valid-password').length > 0){
            for(let i=0; i < $('.valid-password').length;i++){
                checkError($('.valid-password').eq(i),validPassword($('.valid-password').eq(i).val()))
                if($('.valid-input').eq(i).is('#newPassword')){
                    checkError($('.valid-password').eq(i),validPassword($('.valid-password').eq(i).val()))
                }  
            }
        }
        if($('.valid-login').length > 0){
            const reg =new RegExp('^[a-zA-Z0-9]+$');
            let loginRes= $('.valid-login').val().length > 2 && reg.test($('.valid-login').val());
                checkError($('.valid-login'),loginRes)
        }
        if($('.valid-email').length > 0){
            checkError($('.valid-email'),validEmail($('.valid-email').val()))
        }
    })
    function checkError(element,resultValid){
        if(resultValid){
            if($(`.${$(element).attr('data-error')}`).hasClass('active')){
                $(`.${$(element).attr('data-error')}`).removeClass('active')
            }
            if($(element).hasClass('error')){
                $(element).removeClass('error')
            }
        }else{
            $(`.${$(element).attr('data-error')}`).addClass('active')
            $(element).addClass('error')
        }
    }
    function validPassword(password){
        return /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(password)
    }
    function validEmail(email){
        return  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

})

