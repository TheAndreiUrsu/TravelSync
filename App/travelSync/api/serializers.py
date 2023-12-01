from rest_framework import serializers
from .models import userInformation

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model=userInformation
        fields= ('name','genre', 'countryTo','durationPlaylist')

