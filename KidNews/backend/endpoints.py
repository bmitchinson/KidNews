from django.conf.urls import include, url
from rest_framework import routers

from .api import ArticleViewSet, User_readerViewSet

router = routers.DefaultRouter()
router.register('article', ArticleViewSet)
router.register('user_reader', User_readerViewSet)



urlpatterns = [
    url("^", include(router.urls)),
]