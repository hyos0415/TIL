$(function () {
    $('[type=button]').on('click',function (event){
        //AJAX 코드 작성
        $.ajax({     // 서버쪽 URL , Data, 설정이 필요
            async : true,    //비동기, 동기 방식 설정
                            //동기 비동기 차이
                            //동기: 순차적으로 동작
                            //비동기: 프로세스가 수행되는 동안 다른 작업가능(복잡하지만 효율적)
            url :  'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
            type : 'GET', //request 방식
            timeout : 3000, // 1ms 단위로 기다리는 시간
            data : {  //서버 쪽 프로그램에 전달할 데이터 명시 (key,targetDt)
                key : '2c7275d7e3f94011a0ef0205ffb7e3a8',
                targetDt : '20210715'
            } ,
            dataType : 'json', //문자열 json을 자바스크립트객체 변환
            success : function (result){
                // 호출 성공시 데이터 받으면 함수 호출
                alert(result.boxOfficeResult.dailyBoxOfficeList[0].movieNm);
            },
            error : function (){
                // 호출 실패 시 함수 호출
                alert('실패띠ㅜㅜ')
            }
        });
    })
})