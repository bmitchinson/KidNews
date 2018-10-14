from django.contrib import admin
from .models import user_reader, article, log

# Register your models here.
admin.site.register(user_reader)
admin.site.register(article)
admin.site.register(log)
