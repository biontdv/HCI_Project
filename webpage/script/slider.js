$(document).ready(() =>{
    let images = $('.slider-img')

    images.css({'margin-left': '-500px'})
    //button next
    $('#next').click(() =>{
        $(images).animate({
            left: '-500px'
        }, 500, ()=>{
            images.find('img:first-child').appendTo(images)
            images.css({left: '0'})
        })
    })

    //button prev
    $('#prev').click(() =>{
        $(images).animate({
            left: '500px'
        }, 500, ()=>{
            images.find('img:last-child').prependTo(images)
            images.css({left: '0'})
        })
    })

})
