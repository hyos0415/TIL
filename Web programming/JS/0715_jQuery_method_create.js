function myFunc(){
    // 지금까지는 현재 HTML document에 이미 존재하는 Element 찾아서
    // 제어하는 내용
    // 새로운 Element를 만들어서 붙이자
    // h1 element를 만들어서 붙이자

    // h1 element 생성
    //let h1 = $('<h1></h1>').text('귀찮아아아아')
    // 내가 원하는 위치에 붙여야함 (4개의 method 이용)
    // 1. append() : 자식으로 제일 마지막에 붙임
    //$('div').append(h1);

    // 2. prepend() : 자식으로 맨 앞에 붙임
    //let li = $('<li></li>').text('블랙핑크')
    //$('ul').prepend(li);

    // 3. after() : 형제로 바로 뒤에 붙음
    // 4. before() : 형제로 바로 앞에 붙음
    //let li = $('<li></li>').text('블랙핑크')
    //$('li:first').after(li);

}