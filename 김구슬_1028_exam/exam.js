window.addEventListener('DOMContentLoaded', function(){
    
//=== click result ======
    $('.btn .result').on('click', funResult);
    function funResult(){
    var subject = [kor, eng, math];
    var name = $('.grades .name-input').val();
    var kor, eng, math, sum, avg;
        
    kor = parseInt($('.grades .kor-input').val());
    eng = parseInt($('.grades .eng-input').val());
    math = parseInt($('.grades .math-input').val());
        
    sum = kor + eng + math;
    avg = sum / subject.length;
        
    // === 출력
    $('.grades .name').html(name);
    $('.grades .sum').html(sum);
    $('.grades .avg').html(avg);
    if(avg > 50){
        $('.grades .p-f').html('합격');
       }else{
        $('.grades .p-f').html('불합격');
       }
  
    }
    
//=== click cancel ======
    $('.btn .cancel').on('click', funCancel);
    function funCancel(){
        function funDel(el){
            $('.grades .'+ el +'-input').val('');
        }
        
        funDel('name');
        funDel('kor');
        funDel('eng');
        funDel('math');
    }
    
    
    

});
