
from django.urls import path
from .views import userView, userInfo


urlpatterns = [
    path('',userView.as_view()),
    path('createPlaylist', userInfo.as_view())
]
