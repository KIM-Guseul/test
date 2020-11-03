$(function(){//start

(function(){
    //=== img scale ===
    var img = $('.content__item-imgwrap');
    var winH = $(window).innerHeight()/2;
    var imgT = img.offset().top;

    $(window).on('scroll',function(){

        for(var i = 0; i < img.length; i++){

            var imgT = img.eq(i).offset().top;

            if (imgT < scrollY + winH){
                img.eq(i).css({
                    transform:'scale(1.5)',
                    transition:'.5s'
                });
            }else{
                img.eq(i).css({
                    transform:'scale(1)'
                });
            }
        }

    });
})();

//==============================================

    // var page = $('main').height();
    // $('body').height(page);
    //
    // $(window).on('scroll',imgScale);
    // var scale = 0,
    //     imgTop, top,tY=0;
    //
    // function imgScale(e){
    //     top = $(this).scrollTop();
    //     $('main').css({transform:'translateY(-'+top+'px)'});
    //
    //     $('.content__item').each(function(){
    //         imgTop = $(this).offset().top - $(window).height();
    //
    //         if(top > imgTop){
    //             scale = 1.5;
    //             tY += 10;
    //         }else{
    //             scale = 1;
    //             tY -= 10;
    //         }
    //         $(this).find('.content__item-img').css({
    //             transform:'scale('+scale+')'
    //         });
    //
    //         $(this).find('.content__item-title').css({
    //             transform:'translateY(-'+tY+'px)'
    //         });
    //     });
    // }












});//end
