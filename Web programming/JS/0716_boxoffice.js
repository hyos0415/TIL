$(function () {
   $('.navbar-nav').on('click',function (event){
        //AJAX 코드 작성
        $('#tBody').empty()
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
                targetDt : $('#Date').val().replace(/\-/g,"")
            } ,
            dataType : 'json', //문자열 json을 자바스크립트객체 변환
            success : function (rank){
                // 호출 성공시 데이터 받으면 함수 호출
               // alert($('#Date').val().replace(/\-/g,""));
                for(let idx = 0; idx < 10; idx++) {

                    let tr = $('<tr></tr>')
                    let Rank = $('<td></td>').text(rank.boxOfficeResult.dailyBoxOfficeList[idx].rank);
                    let postertd = $ ('<td></td>')
                    let movieNm = $('<td></td>').text(rank.boxOfficeResult.dailyBoxOfficeList[idx].movieNm);
                    let openDt = $('<td></td>').text(rank.boxOfficeResult.dailyBoxOfficeList[idx].openDt);
                    let detailBtn = $('<button></button>').text("상세보기").addClass('btn btn-warning','active');
                    let detailBtntd = $('<td></td>').append(detailBtn);
                    let movieCode = rank.boxOfficeResult.dailyBoxOfficeList[idx].movieCd;
                    let movieName = rank.boxOfficeResult.dailyBoxOfficeList[idx].movieNm;

                    detailBtn.attr('data-movieCd',movieCode);
                    detailBtn.on('click',function (){
                        $.ajax({
                            async : true,
                            url :  'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json',
                            type : 'GET',
                            timeout : 3000,
                            data : {
                                key : '2c7275d7e3f94011a0ef0205ffb7e3a8',
                                movieCd : movieCode
                            } ,
                            dataType : 'json', //문자열 json을 자바스크립트객체 변환
                            success : function (detail) {
                                alert("영화 코드 : "+ movieCode)
                                alert("영어 제목 : "+detail.movieInfoResult.movieInfo.movieNmEn);
                                alert("주연 배우 : "+detail.movieInfoResult.movieInfo.actors[0].peopleNm);
                            },
                            error : function (){
                                alert(실패);
                            }
                        })
                    })

                    let removeBtn = $('<button></button>').text("삭제").addClass('btn btn-danger');
                    removeBtn.on('click',function (){
                        $(this).parent().parent().empty();
                    });
                    let removeBtntd = $('<td></td>').append(removeBtn);

                        $.ajax({
                            type: "GET",
                            url: "https://dapi.kakao.com/v2/search/image",
                            headers: {
                                'Authorization':'KakaoAK 9de46768efd03ac15ae7914d7434a1b8'
                            },
                            data : { 'query' : movieName + '포스터',
                                'sort'  : 'accuracy', //accuracy(정확도순) 또는 recency(최신순)
                                'page'  : 1, //결과 페이지 번호, 1~50 사이의 값, 기본 값 1
                                'size'  : 1 //한 페이지에 보여질 문서 수, 1~80 사이의 값, 기본 값 80
                            },
                            success: function (imgdata) {
                                //alert("이미지 성공")
                                $(imgdata.documents).each(function(index){
                                   $(postertd).append('<img src="'+this.thumbnail_url+'"/>');
                                });
                            },
                            error: function () {
                                alert("이미지를 불러오는데 실패하였습니다.")
                            }

                    })

                    postertd
                    $('tbody').append(tr.append(Rank));
                    $('tbody').append(tr.append(postertd));
                    $('tbody').append(tr.append(movieNm));
                    $('tbody').append(tr.append(openDt));
                    $('tbody').append(tr.append(detailBtntd));
                    $('tbody').append(tr.append(removeBtntd));


                    /*$('.rank'+[idx]).text(rank.boxOfficeResult.dailyBoxOfficeList[idx].rank);
                    $('.movieNm'+[idx]).text(rank.boxOfficeResult.dailyBoxOfficeList[idx].movieNm);
                    $('.openDt'+[idx]).text(rank.boxOfficeResult.dailyBoxOfficeList[idx].openDt);*/
                    //console.log(idx)
                    // HTML tag는 사용할 수 있는 속성이 정해져 있음
                    // <td data-author='홍길동>일그러진 영웅</td>
                    // 사용자 정의 속성 사용 'data-'
                    // detailbtn.

                    }
                },
            error : function (){
                // 호출 실패 시 함수 호출
                alert('실패띠ㅜㅜ')
            }
        });
    })
})
