from django.db import models

# Create your models here.
class userInformation(models.Model):
    name= models.CharField(max_length=8)
    genre= models.CharField(max_length=8)
    countryTo= models.CharField(max_length=56)
    durationPlaylist=models.IntegerField()
