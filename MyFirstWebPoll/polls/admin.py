from django.contrib import admin
from polls.models import Question, Choice

admin.site.register(Question) # Model을 등록 > 관리자 page 에서 해당 table출력
admin.site.register(Choice)

#python manage.py makemigrations 실행