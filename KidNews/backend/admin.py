from django.contrib import admin
from .models import user_reader, article

# Register your models here.
admin.site.register(user_reader)
admin.site.register(article)