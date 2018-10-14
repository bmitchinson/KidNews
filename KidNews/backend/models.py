from django.db import models

# Create your models here.
class user_reader(models.Model):
  name = models.CharField(max_length=100)
  age = models.PositiveIntegerField()
  gender = models.CharField(max_length=10)
  
  class Meta:
    ordering = ('name',)
  
  def __str__(self):
    return self.name


class article(models.Model):
  title = models.CharField(max_length=150)
  source_link = models.URLField()
  description = models.CharField(max_length=300)
  tags = models.TextField()
  # connect many users to articles & vise versa
  users = models.ManyToManyField(user_reader)

  class Meta:
    ordering = ('title',)
  
  def __str__(self):
    return self.title
