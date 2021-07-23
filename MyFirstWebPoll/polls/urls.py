from django.urls import path
from . import views  # . 현재 폴더 나타냄 상대경로

app_name = 'polls'

urlpatterns = [
    # http://localhost:8000/polls/
    path('', views.index, name='index'),
    # http://localhost:8000/polls/2
    path('<int:question_id>/', views.detail, name='detail'),
    # http://localhost:8000/polls/2/vote
    path('<int:question_id>/vote/', views.vote, name='vote'),
    # http://localhost:8000/polls/2/results/
    path('<int:question_id>/results/', views.results, name='results'),

]