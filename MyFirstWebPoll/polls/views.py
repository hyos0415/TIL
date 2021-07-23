from django.shortcuts import render, get_object_or_404
from polls.models import Question, Choice
from django.http import HttpResponseRedirect
from django.urls import reverse


# view 함수를 이용하여 index 생성
# 클라이언트가 보낸 request 에 대한 정보를 객체화 시켜서 index에 포함

# DB 내의 Question table의 질문의 목록을
# HTML Template을 이용해 클라이언트에 전달
def index(request):
    # 모든 질문에 대한 list를 가져와야함
    # DB에 접속해 Question Table 목록 가져와야함
    # SQL 명령어로 가능하나 ORM을 사용해 가져옴

    # class는 table을 지칭 instance는 record 지칭
    q_list = Question.objects.all().order_by('-pub_date',)   # Question 클래스의 모든 Instance를 가져옴
                                          # oreder_by 정렬 기준 pub_date 순, 기본은 오름차순, -pub_date 하면 내림차순
                                          # list 형식으로 저장
    # context 객체를 만들어 Template을 이용해 redering 한 결과를 생성해서 리턴
    # context 객체라는 dict 생성
    context = { 'question_list' : q_list }
    return render(request, 'polls/index.html', context)
    # 이 render는 context 객체와 템플릿을 합쳐줌


def detail(request, question_id):
    # question_id가 결국 Question Table에서 사용자가 선택한 질문의 PK
    question = get_object_or_404(Question, pk=question_id)  #Question 클래스에서 가져옴
    context = {'question' : question}
    return render(request, 'polls/detail.html', context)


def vote(request, question_id):
    # 2가지 경우, 정상적으로 항목 선택
    # 선택하지 않았을 때 투표한 경우
    question = get_object_or_404(Question, pk=question_id)  # Question 클래스에서 가져옴
    try:
        choice = question.choice_set.get(pk=request.POST['myChoice'])
    except(KeyError, Choice.DoesNotExist):
        return render(request, 'polls/detail.html', {
            'question' : question,
            'err_msg' : '선택하지 않았습니다.'
        })
    else:
        # 정상적인 상황이므로 해당 항목에 대한 투표수를 증가시킴
        # 최종 화면에 대한 request를 생성 후 요청
        choice.votes += 1
        choice.save()
        # 3번째 화면을 출력 ( redirection )
        # 새로운 request를 이용하여 새로운 view 함수 이용
        # url을 표현하기 위해 직접 입력하는 방법
        # namespace, name을 이용하는데 url conf에서 찾아오는 코드
        # /polls/id/results

        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))

def results(request, question_id):
    # 투표결과화면을 만들어서 리턴
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/results.html',{
        'question': question
    })