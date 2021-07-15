function myFunc() {
// text()의 return값은 하나의 문자열이 되어야 함
    //$('ul > li').text()
  //  $('ul > li').each(function(idx,item){
        // 첫번째 parameter인 idx는 숫자 index
        // 반복할 때 마다 1씩 증가하는 변수

       // console.log('안녕!!!'+idx)
        //$('selector') : selector로 지정된 HTML element를 찾아서 browser가 만들어준
        //문서 객체(document object)를 들고 와서 그걸 다시 jQuery 객체로 변환
        //console.log($(item).text() + "입니다.")
  //  });

    // style을 변경하기 위한 method : css() 효율이 좋지 않음 (반복적인 렌더링)
    // >> acdClass(), removeClass()
    //$('ul > li').css('color','navy')
    //$('ui > li').css('background-color','yellow')
    //$('ul > li:last').addClass('listyle')
    //text 내용 알아올 때, 변경할 때:html method, text method
    //$('ul > li:eq(2)').html('<font color="red">날씨가 미쳤어</font>')

    //Element 삭제하려면??
    // >> remove(), empty():본인 살고 후손 날림
    //$('div').remove();
    $('div').empty();
}
//속성제어
function myFunc1(){
    $('[type=text]').removeAttr('disabled')
}

function myFunc2(){
    $('[type=text]').attr('disabled','disabled')
}