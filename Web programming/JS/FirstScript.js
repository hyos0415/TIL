
    // javascript code
    // alert("커피가 필요합니다.") //blocking함수 확인버튼 누기지 전까지 프로그램 정지

    // 변수를 만들어 보아요

    a = 100 // python style, JS도 가능, 전역변수st라 잘 안씀
    let tmp1 = 100;  //number
    let tmp2 = 'Helo'; // string
    let tmp3 = true;   // boolean
    let tmp4 = [1, 2, 3] // array(배열)

    // 객체 literal

    let tmp5 = {
        name : '홍길동',
        age : 28,
        address : '서울',
        get_info : function() {
            //this는 python의 self
            return this.name + this.address;
        }
    }

    console.log(tmp5.address)
    console.log(tmp5['age']) //키 값을 사용할 때에는 문자열
    console.log(tmp5.get_info())
    // 함수
    // 선언적 함수
    function my_func(x, y) {
        let result = x+y;
        return result;

    }

    // (First-classes function을 지원)
    // 함수 자체의 이름을 안 지어줘도 괜찮음
    // 익명함수(람다함수)
    let tmp6 = function(x,y) {
        let result = x + y;
        return result;
    }

    /* 파이썬 함수
    def myfunc(x,y):
        result = x+y
        return result
     */