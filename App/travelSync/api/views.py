from django.shortcuts import render
from .models import userInformation
from .models import TopSongs
from rest_framework import generics, status
from .serializers import userSerializer
from .serializers import songsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .scripts import Graphy as G, Sorty

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
            country_from=serializer.validated_data.get('countryFrom')
            user = userInformation.objects.create(name=name, genre=genre, countryTo=country_to, durationPlaylist=duration_playlist, countryFrom=country_from)
            result=self.personalizedPlaylist(genre, country_to, duration_playlist, country_from)

            collectedData={
                'user': userSerializer(user).data,
                'playlist':result
            }

            return Response(collectedData, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def personalizedPlaylist(self, genre, country_to, duration_playlist, country_from):
        songs_to = TopSongs.objects.filter(country=country_to)
        songs_from = TopSongs.objects.filter(country=country_from)
        
        # Creating a graph
        g_to = G.Graph(songDB=songs_to,country=country_to,genre=genre)
        g_from = G.Graph(songDB=songs_from,country=country_from,genre=genre)
        #call mts

        songs_to = g_to.MST(len(songs_to))
        songs_from = g_from.MST(len(songs_from))

        # songs_merge_name = Sorty.merge_sort(songs)
        # songs_merge_artist = Sorty.merge_sort(songs,"")
        # songs_quick_name = Sorty.quick_sort(songs)
        # songs_quick_artist = Sorty.quick_sort(songs,"")

        # print(f"Songs Unsorted:{songs}")
        # print(f"Songs sorted with merge sort by song name: {songs_merge_name}")
        # print(f"Songs sorted with merge sort by artist name: {songs_merge_artist}")
        # print(f"Songs sorted with quick sort by song name: {songs_quick_name}")
        # print(f"Songs sorted with quick sort by artist name: {songs_quick_artist}")

        playlistResult = [{
            'name': song[1],
            'artist': song[0],
            'uri': song[2]
        } for song in songs_to[:duration_playlist]]

        # for song in top_songs:
        #     print(f"   1 : {song.name.encode('utf-8').decode('utf-8')},Artist: {song.artist}")

        return playlistResult
