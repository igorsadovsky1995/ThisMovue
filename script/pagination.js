$(document).ready(()=>{
    $('.pagination__page').click((e)=>{
        $('.pagination__page').removeClass('open')
        $(e.target).closest('.pagination__page').addClass('open')
    })
})