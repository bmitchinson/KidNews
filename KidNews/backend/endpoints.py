from django.conf.urls import include, url
from rest_framework import routers

from .api import ArticleViewSet

router = routers.DefaultRouter()
router.register('article', ArticleViewSet)

urlpatterns = [
    url("^", include(router.urls)),
]