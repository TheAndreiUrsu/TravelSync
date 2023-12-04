from rest_framework import serializers
from .models import userInformation
from .models import TopSongs

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model=userInformation
        fields= ('name','genre', 'countryTo','durationPlaylist')

class songsSerializer(serializers.ModelSerializer):
    class Meta:
        model=TopSongs
        fields=('country','uri','name','artist','explicit','genres','danceability','energy','key','loudness','speechiness','acoustics','instrumentalness','liveliness','valence','tempo','duration_seconds')

