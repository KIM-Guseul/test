$(function(){//start

    var data = new XMLHttpRequest();
    data.open('GET','data.json',true);
    data.send(null);

    data.addEventListener('load',work);


    function work(){
        //console.log('뿅');

        var tag = '', response;
        response = JSON.parse(data.responseText);
        //console.log(response);


        response.work.forEach(function(src,a){
            tag +="<div class='col-4'>";
            tag +="<a href='#' class='image fit'><img src='" + src + "' alt='' /></a>";
            tag +="</div>";
        });
        $('#work .row').html(tag);
    }


    $('nav a').on('click',function(e){
        e.preventDefault();

        var idx = $(this).index();
        //outerHeight() 마진값... 포함. innerHeight() 컨텐츠만의 높이

        //=== history ===
        history.pushState({page:idx},'tit','');
        contents(idx);
    });

    function contents(idx){
        var conH = $('#main article').eq(idx).outerHeight();

        //=== nav ===
        $('nav a').removeClass('active');
        $('nav a').eq(idx).addClass('active');

        //=== content hide ===
        $('#main article').stop().animate({opacity:0},500,function(){
            $('#main article').hide();
        });

        //=== content show ===
        $('#main').delay(400).animate({height:conH},500,function(){
            $('#main article').eq(idx).show().animate({opacity:1});
        });
    }


    // window.addEventListener('popstate',function(){});
    // window.onpopstate = function(){};
    $(window).on('popstate',function(){
        var state;

        try{
            state = history.state.page
        }catch{
            state = 0;
        }
        contents(state);
    });



});//end
