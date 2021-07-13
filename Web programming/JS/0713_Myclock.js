
function startClock() {
    // 1초 마다 myfunc를 호출하는 코드
    setInterval(function() {
        myfunc()
    },1000)

    clearInterval(t)
}

function myfunc() {
    //alert('호출');
    // 1. 현재 시간을 알아내기
    // class에 instance 만들 때 new 사용
    let today = (new Date()).toLocaleTimeString()
    console.log(today)
    // 2. 시간을 출력할 객체를 가져오기
    let myDiv = document.getElementById('clockDiv')
    myDiv.innerText = today
}
