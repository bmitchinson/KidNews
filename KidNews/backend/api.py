from rest_framework import viewsets, permissions

from .models import article
from .serializers import ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = article.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = ArticleSerializer