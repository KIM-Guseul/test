$(function(){
    $.ajax({
        url: 'data.xml',
        type: 'GET',
        success: function(data) {
            //console.log('뿅');

            var detail, thumb, name, idx, tag = '';

            //=== 썸네일 호출
            $(data).find('item').each(function(){
                detail = $(this).find('detail').text();
                thumb = $(this).find('thumb').text();
                name = $(this).find('name').text();

                tag ="<article class=''>";
                tag +="<a class='thumbnail' href='"+detail+"'><img src='"+thumb+"' alt='"+name+"' /></a>";
                tag +="</article>";

                $('#thumbnails').append(tag);
            });

            //=== 썸네일 클릭
            $('#thumbnails article').on('click',showImg);
            function showImg(e){
                idx = $(this).index();
                name, detail;

                e.preventDefault();
                imgChange();
            };

            //=== 이미지 호출
            function imgChange(){
                name = $(data).find('item').eq(idx).find('name').text();
                detail = $(data).find('item').eq(idx).find('detail').text();

                $('#thumbnails article').removeClass('active');
                $('#thumbnails article').eq(idx).addClass('active');

                $('.caption h2').text(name);
                $('.image').css({"background":"url("+detail+")"});
            }

            //=== 이미지 슬라이드
            var len = $(data).find('item').length;

            $('.nav-next').on('click',function(e){
                idx++;
                if(idx == len) idx = 0;
                imgChange();
            });
            $('.nav-previous').on('click',function(){
                idx--;
                if(idx < 0) idx = len - 1;
                imgChange();
            });

            //=== 전체화면
            $('.toggle').on('click',function(){
                $('body').toggleClass('fullscreen');
            });



        }

    });

});//end
