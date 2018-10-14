from django.contrib import admin
from .models import user_reader, article, reader_log

# Register your models here.
admin.site.register(user_reader)
admin.site.register(article)
admin.site.register(reader_log)
