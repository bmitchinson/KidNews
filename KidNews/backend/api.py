from rest_framework import viewsets, permissions

from .models import article, user_reader
from .serializers import ArticleSerializer,User_readerSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = article.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = ArticleSerializer

class User_readerViewSet(viewsets.ModelViewSet):
    queryset = user_reader.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = User_readerSerializer