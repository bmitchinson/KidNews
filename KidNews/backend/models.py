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
  description = models.TextField()
  tags = models.CharField(max_length=100)
  text = models.TextField(default="PROBLEM GETTING ARTICLE TEXT")
  media_link = models.URLField(blank=True)
  # connect many users to articles & vise versa
  users = models.ManyToManyField(user_reader, blank=True)

  class Meta:
    ordering = ('title',)
  
  def __str__(self):
    return self.title

class log(models.Model):
  createdAt = models.DateTimeField(auto_now_add=True)
  user = models.ForeignKey(
    user_reader,
    on_delete=models.CASCADE,
    editable=False,
  )
