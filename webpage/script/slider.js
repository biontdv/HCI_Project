$(document).ready(() =>{
    var images = $('.slider-img')
    var responsiveWidth=$(".slider-img img").width()

    images.css({'margin-left': -responsiveWidth})
    //button next
    $('#right').click(() =>{
        $(images).animate({
            left: -responsiveWidth
        }, 1000, ()=>{
            images.find('img:first-child').appendTo(images)
            images.css({left: '0'})
        })
    })

    //button prev
    $('#left').click(() =>{
        $(images).animate({
            left: responsiveWidth
        }, 1000, ()=>{
            images.find('img:last-child').prependTo(images)
            images.css({left: '0'})
        })
    })

})
