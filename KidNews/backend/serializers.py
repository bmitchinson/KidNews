from rest_framework import serializers

from .models import article,user_reader


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = article
        fields = ('id', 'title', 'source_link', 'description', 'tags',  'users',  )

class User_readerSerializer(serializers.ModelSerializer):
    class Meta:
        model = user_reader
        fields = ('id', 'name', 'age', 'gender',  )