
//$(document).on('ready',function(event){
  //  $('ul > li').on('mouseenter',function(event){
    //    $(this).addClass('listyle');
    //})
    //$('ul > li').on('mouseleave',function(event){
      //  $(this).removeClass('listyle');
    //})
//})

//$() : document ready의 축약형
$(function(event){
    $('ul > li').on('mouseenter',function(event){
        $(this).addClass('listyle');
    })
    $('ul > li').on('mouseleave',function(event){
        $(this).removeClass('listyle');
    })
})


function myFunc(){

   // $('ul > li:first').on('click',function(event){
        //parameter event의 의미는 >> Event 객체
        // 1. Event Source >> Event가 발생한 객체를 지칭
        // 2. Event 속성 >> on + Event이름 (onclick) JS의 이벤트 처리방식
        // 3. Event Handler >> 이벤트 발생 시 호출되는 JS
        // 4. Event 객체 >> 이벤트 발생 시 브라우저에서 생성
        //                 이벤트 세부사항이 객체 안에 담겨있음
        //                 자동적으로 핸들러에 전달
     //   alert('클릭되었습니다.')

//});

    //$('ul > li').on('click',function(event){
        // 클릭 되었을 때 어떤 li가 클릭 되었는지 알아야 그 글자를 가져옴
        // Event Handler 내에서 사용할 수 있는 특수 키워드
        // this >> Event Source 에 대한 문서객체(document object)

      //  alert($(this).text() + '클릭되었습니다.')

    //});
    // $('ul > li').click(function (){
    // })

    //$('ul > li').on('dbclick',function (event){
    //})

    //$('ul > li').on('mouseover',function(event){
        // 클릭 되었을 때 어떤 li가 클릭 되었는지 알아야 그 글자를 가져옴
        // Event Handler 내에서 사용할 수 있는 특수 키워드
        // this >> Event Source 에 대한 문서객체(document object)

      //   alert($(this).text() + '클릭되었습니다.')})

    //$('ul > li').on('mouseenter',function(event){
      //$(this).addClass('listyle');
    //})
    //$('ul > li').on('mouseleave',function(event){
      //  $(this).removeClass('listyle');
    //})
    // ready : event 중 하나, 문서(document)가 준비되었을때
    //         <body>안의 모든 element를 다 읽고 각각의 element를 다 객체화 했을때  >> DOM
    //         >> DOM(Document Object Model) 이 생성되는 시점
    //         browser에 html tag들이 표현되는 시점

}