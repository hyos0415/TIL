from django.db import models

# Create your models here.
# 모델 작업은 DB 테이블 생성
# polls application은 Question, choice 2개의 테이블 사용


# model을 만드려면 반드시 정해져있 class(models.Model) 상속
# class안에는 DB안의 테이블의 컬럼 명시
# id(Integer-PK), question_text(varchar(200)) , pub_date => 컬럼명

# 이 class의 instance가 table의 하나의 record(raw) 와 1:1 mapping
# admin page에서 이 table의 내용을 볼 수 있음
# 객체 형태로 보임

# admin.py 에서 모델을 등록 해야함
class Question(models.Model):

    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField()

    def __str__(self):
        return self.question_text       #객체를 문자열로 변환하여 테이블을 확인


class Choice(models.Model):

    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    # foreignkey는 컬럼명이 될 때 현재 명시한 class variable의 이름에 + '_id' 로 생성
    question = models.ForeignKey(Question, on_delete=models.CASCADE) # 초이스 테이블이 삭제가 우선되어야하므로 설정

    def __str__(self):
        return self.choice_text

