function myFunc() {
    // jQuery code 작성
    // jQuery는 기본적으로 내가 제어하길 원하는 Element 선택
    // 선택된 Element에 대해 method 호출
    // jQuery는 어떤 형태?
    // $로 시작
    // $("selector라고 불리는 특수한 형태의 문자열")
    // 1. universal selector(전체 선택자) (*)
    //$("*").css('color','red');
    //<h1>을 찾아서 객체화 시켜서 자바스크립트로 가져옴
    // document object : 문서 객체
    // 이 document object를 jQuery객체로 만듬
    //  2.tag selector (태그명)
    //$("li,h1").css('background-color','blue');
    // 3.id selector (#)
    //$('#my_lunch').text("돈까스로 변경")
    // alert($('#my_lunch').text())
    //4. class selector .
    //$('.my_region').remove();
    //5.구조 선택자 > 자식선택자
   // $('ol > li').css('color','khaki')
    // 후손선택자 > 후손은 자식의 개념을 포함하고 그 밑의 요소들을 모두 포함
    //         > 공백으로 표현
   // $('div li').remove();
    // 형제선택자 > + (바로 다음에 나오는 형제) ~(다음에 나오는 형제 모두)
   // $('#my_lunch + li').text('도시락');
   // 6. 속성 선택자 (attribute selector) > []
    $('[type=button]').css('color','violet');

}