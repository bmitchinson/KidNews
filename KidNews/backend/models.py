from django.db import models

# Create your models here.
class backend(models.Model):
  name = models.CharField(max_length=100)
  age = models.PositiveIntegerField()
  gender = models.CharField(max_length=10)
  