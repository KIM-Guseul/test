$(function(){//start

     $.ajax({
         url: 'data.xml',
         type: 'GET',
         success: function(data) {
             console.log("뿅");

             var detail, thumb, name, tag = '';

             $(data).find('item').each(function(i){
                 detail = $(this).find('detail').text();
                 thumb = $(this).find('thumb').text();
                 name = $(this).find('name').text();

                 tag ="<article class=thumb>";
                 tag +="<a href='" + detail + "' class='image'><img src='" + thumb + "' alt='" + name + "' /></a>";
                 tag +="<h2>" + name + "</h2>";
                 tag +="</article>";

                 $('#main').append(tag);
            });

            // === popup ===


            var idx = 0;
            $('#main article').on('click',function(e){
                e.preventDefault();//페이지가 넘어가는것 방지

                idx = $(this).index();
                $('.poptrox-overlay').show();
                dataChange();
            });

            function dataChange(){
                //$(data).find('item').eq(idx).find('detail').text();

                detail = $('#main article').eq(idx).find('a').attr('href');
                //this = article. find a태그 . href 속성 = detail
                txt = $('#main article').eq(idx).find('h2').text();

                $('.poptrox-overlay img').attr('src',detail);
                //.poptrox-overlay img의 src 속성을 받아온 detail값으로
                $('.poptrox-overlay .caption h2').text(txt);
            }

            // $('.nav-previous').on('click',function(){
            //     idx--;
            //     dataChange();
            // });
            // $('.nav-next').on('click',function(){
            //     idx++;
            //     dataChange();
            // });
            //
            // $('.closer').on('click',function(){
            //     $('.poptrox-overlay').hide();
            // });

            $('.nav-previous, .nav-next, .closer').on('click',btn);

            function btn(){
                var btnName = $(this).attr('class');
                btnName == 'nav-next' ? idx++ : idx--;
                dataChange();

                if(btnName == 'closer'){
                    $('.poptrox-overlay').hide();
                }
            }

            // === about click ===
            $('#header nav a').on('click',footer)
            function footer(){
                $('footer').toggleClass('active');

                //=== info check ===
                $('input[type=sbmit]').on('click',dataCheck);

                function dataCheck(e){

                    e.preventDefault();

                    var nameCheck = RegExp(/^[가-힣]{2,6}$/);
                    var emailCheck = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);

                    var name = $('input[name=name]').val();
                    var email = $('input[name=email]').val();

                    if($name.val() == ''  || nameCheck.test($name.val()) ){
                        alert('이름을 다시 확인하세요..');
                        $name.focus();
                        return;
                     }
                    msg.action = 'http://naver.com';
                    msg.submit();

                }

            }

         }

     });//ajax end
});//end
