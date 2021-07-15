function myFUNC() {
    // 변경된 select 박스 내의 내용을 알아와서 text에 입력
    $('#myText').val($('select > option:selected').text())
    //:selected 특수 선택자
}

//JS 함수이며 Event Handler
function choice_hobby() {
    // 현재 체크된 체크박스와 관련된 내용을 가져와서 콘솔에 출력
    console.log($('[type=checkbox]:checked + span').text());
}

