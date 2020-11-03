window.addEventListener('DOMContentLoaded', function () {
    $.ajax({
        url:'data.json',
        type:'get',
        success:function(data){
                
    // === call image list ======
            var detail, thumb, name, list ='';
            function conList(){
                 data.items.forEach(function(value,key){
                     detail = value.detail;
                     thumb = value.thumb;
                     name = value.name;
                     
                    list += "<article class='thumb'>";
                    list += "<a href='"+ detail +"' class='image'><img src='"+ thumb +"' alt='"+ name +"' /></a>";
                    list += "<h2>"+ name +"</h2>";
                    list += "</article>";
                     
                 });

                 $('#main').html(list);
            } conList();
            
            
    // === show image popup ======
            var idx = 0;
            $('#main article').on('click',function(e){
                
                e.preventDefault();
                idx = $(this).index();
                
                $('.poptrox-overlay').show();
                conPop();
                
            });
            
            function conPop(){
                detail = $('#main article').eq(idx).find('a').attr('href');
                txt = $('#main article').eq(idx).find('h2').text();

                $('.poptrox-overlay img').attr('src',detail);
                $('.poptrox-overlay .caption h2').text(txt);
            }
            
    // === show image next/prev ======
            $('.nav-previous').on('click',function(){
                idx--; conPop();
            });
            $('.nav-next').on('click',function(){
                idx++; conPop();
            });

    // === close image popup ======
            $('.closer').on('click',function(){
                $('.poptrox-overlay').hide();
            });
            
            
    // === click about ======
            $('#header nav a').on('click',popFooter);
            function popFooter(){
                $('footer').toggleClass('active');
                
            // ===  info check ======
                var nameCheck = RegExp(/^[가-힣]{2,6}$/);
                var emailCheck = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
                
                $('input[type=submit]').on('click',infoCheck);
                
                function infoCheck(e){

                    e.preventDefault();
                    
                    var name = $('input[name=name]').val();
                    var email = $('input[name=email]').val();
                    var message = $('textarea[name=message]').val();

                    function feedback(el){
                        alert('check your '+el+' plz');
                        $('input[name='+el+']').val('');
                        $('input[name='+el+']').focus();
                    }
                    
                    if (!nameCheck.test(name)) {
                        feedback('name');
                        return;
                    }

                    if (!emailCheck.test(email)) {
                        feedback('email');
                        return;
                    }
                    if(message == ''){
                        alert('Enter your message plz');
                        $('textarea[name=message]').focus();
                        return;
                    }
                    
                    alert('Thank you');

                }
            }
            

        }
    });
});