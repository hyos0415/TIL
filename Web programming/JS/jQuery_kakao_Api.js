function kakaoApiImgInsert(){

    $.ajax({
        type: "GET",
        url: "https://dapi.kakao.com/v2/search/image",
        headers: {
            'Authorization':'KakaoAK 9de46768efd03ac15ae7914d7434a1b8'
        },
        data : { 'query' : '랑종',

            'sort'  : '', //accuracy(정확도순) 또는 recency(최신순)

            'page'  : 1, //결과 페이지 번호, 1~50 사이의 값, 기본 값 1

            'size'  : 1 //한 페이지에 보여질 문서 수, 1~80 사이의 값, 기본 값 80

        },

        success: function (imgdata) {
            $(imgdata.documents).each(function(index){
                $("div#content").append('<img src="'+this.thumbnail_url+'"/>');
                image
            });
        },

        error: function () {
            alert("이미지를 불러오는데 실패하였습니다.")
        }

    });

}
