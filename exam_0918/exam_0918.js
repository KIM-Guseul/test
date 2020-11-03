// window.addEventListener('DOMContentLoaded',function(){//start
//
// // === header addClass ===
//     var header = document.querySelector('header');
//     header.classList.add('navbar-fixed-top');
//
// // === nav.active ===
//     window.addEventListener('scroll',function(){
//         var nav = document.querySelector('nav');
//         var m_about = document.querySelector('.m_about');
//         var winH = window.innerHeight;
//
//         if (winH - m_about.offsetTop < this.scrollY){
//             nav.classList.add('active');
//         }else{
//             nav.classList.remove('active');
//         }
//
//     });
//
// });//end

$(function(){//start

    (function(){//익명함수

        // === nav.active ===
        if(!$('body').hasClass('index')) return false;
        var $spotHeight =  $('.hero-full-container a').offset().top + 100,
            top;
        function nav(){
            top = $(window).scrollTop();
            if(top > $spotHeight){
                $('nav').addClass('active');
            }else{
                $('nav').removeClass('active');
            }
        }
        $(window).on('scroll',nav);
    })(); //익명함수 실행 명령

// === next, prex ===

    // var len = $('.item').length;
    // var nextBtn = $('.carousel-caption .right');
    // var prevBtn = $('.carousel-caption .left');
    //
    // nextBtn.on('click',function(){
    //     var idx =  $(this).parents('.item').index();
    //     console.log(idx);
    //
    //     idx +=1;
    //     if(idx == len) idx=0;
    //
    //     $('.item').removeClass('active');
    //     $('.item').eq(idx).addClass('active');
    // });
    //
    // prevBtn.on('click',function(){
    //     var idx =  $(this).parents('.item').index();
    //     console.log(idx);
    //
    //     if(idx < 0) idx=len;
    //     idx -=1;
    //
    //     $('.item').removeClass('active');
    //     $('.item').eq(idx).addClass('active');
    //
    //
    // });

    var button = $('.carousel-control'),
        idx=0,parent,
        $item=$('.item'),
        len=$item.length;

        $item.not(':first').hide();

    function itemChange(){
        idx = $(this).parents('.item').index();

        $(this).hasClass('left') ? idx-- : idx++;
        if(idx == len) idx = 0;
        if(idx == -1) idx = len-1;

        $item.hide().removeClass('active');
        $item.eq(idx).show().addClass('active');
    }
    button.on('click',itemChange);


// === email check ===

    var emailCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    $('button[type=submit]').on('click',funCheck);
    function funCheck(e){
        e.preventDefault();
        var email = $('#email').val();
        if(!emailCheck.test(email)){
            alert('Error');
            $('#email').val('');
            $('#email').focus();
            return;
        }else{
            alert('Good!');
            $('#subject').focus();
        }
    }

// === project ===
(function(){
    var $zoomSelector = $('img[data-action=zoom]'),
        blen,$this,
        win = {w:$(window).width()/2,h:$(window).height()/2},
        z = {scale:1, idx:1, x:0, y:0, offsetY:0, offsetX:0, imgW:0,imgH:0};

    function zoom(e){
        $this = $(this);
        $this.toggleClass('active');
        blen = $this.hasClass('active');

        z.offsetY = $this.offset().top - $(window).scrollTop();
        z.offsetX = $this.offset().left;

        imgW = $this.width()/2;
        imgH = $this.height()/2;

        if(blen){
            z.scale = 2;   z.idx = 2;

            if(win.h > z.offsetY){
                z.x = (Math.abs(win.w - z.offsetX) - imgW);
                z.y = (Math.abs(win.h - z.offsetY) - imgH);
            }else{
                z.x = (Math.abs(win.w - z.offsetX) - imgW);
                z.y = -(Math.abs(win.h - z.offsetY) + imgH);
            }
        }else{
            z.scale = 1;   z.idx = 1;  z.x = 0;   z.y = 0;
        }

        setTimeout(function(){
            $this.css({
                transform:'translate('+z.x+'px,'+z.y+'px) scale('+z.scale+')',
                position:'relative',
                zIndex:z.idx
            });
        },100)
    }
    $zoomSelector.on('click',zoom);

})();



});//end
