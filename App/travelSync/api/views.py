from django.shortcuts import render
from .models import userInformation
from .models import TopSongs
from rest_framework import generics, status
from .serializers import userSerializer
from .serializers import songsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class userView(generics.CreateAPIView):
    queryset=userInformation.objects.all()
    serializer_class=userSerializer


class userInfo(APIView):
    serializer_class = userSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data.get('name')
            genre = serializer.validated_data.get('genre')
            country_to = serializer.validated_data.get('countryTo')
            duration_playlist = serializer.validated_data.get('durationPlaylist')
            user = userInformation.objects.create(name=name, genre=genre, countryTo=country_to, durationPlaylist=duration_playlist)
            result=self.personalizedPlaylist(genre, country_to, duration_playlist)

            collectedData={
                'user': userSerializer(user).data,
                'playlist':result
            }

            return Response(collectedData, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def personalizedPlaylist(self, genre, country_to, duration_playlist):
        playlistResult = {
            'genre': genre,
            'country_to': country_to,
            'duration_playlist': duration_playlist,
        }
        return playlistResult

class songView(generics.CreateAPIView):
    queryset=TopSongs.objects.all()
    serializer_class=songsSerializer

class songInfo(APIView):
    serializer_class=songsSerializer

    def get(self, request, format=None):
        top_songs = TopSongs.objects.all()[:5]
        
        serializer = self.serializer_class(top_songs,many=True)
        return Response(serializer.data)
            