import pandas as pd
import networkx as nx
from api.scripts import Songpy as sp

class Graph:

    def __init__(self, songDB, country, genre):
        self.__G = nx.Graph()
        self.__songs = songDB
        self.__genre = genre
        self.__createGraph(country)
    
    def __createGraph(self,country):
        self.__list = [sp.Song(name=song.name,artist=song.artist,genre=song.genres,ex=song.explicit,time=song.duration_seconds,dance=song.danceability,nrg=song.energy,key=song.key,loud=song.loudness,speech=song.speechiness,acoustic=song.acoustics,ins=song.instrumentalness,live=song.liveliness,valence=song.valence,tempo=song.tempo,URL=song.uri) for song in self.__songs]
        self.__songDict = {country : self.__list}

        for i in self.__songDict[country]:
            for j in self.__songDict[country]:
                if (i == j):
                    continue
                elif i.isVisited and j.isVisited:
                    continue
                self.__G.add_edge(i,j,weight=sp.CalculateSimilarities(i,j,self.__genre))
                i.isVisited = True
                j.isVisited = True

    def MST(self, song_amt):
        mst = nx.minimum_spanning_tree(self.__G)
        buffer = 0

        artistList = []
        nameList = []
        urlList = []
        uniqueSongs = set()

        for u,v,a in mst.edges(data=True):
            if (u.artist,u.name) in uniqueSongs or (v.artist,v.name) in uniqueSongs:
                buffer-=1
            if buffer == 0 and (u.artist,u.name) not in uniqueSongs:
                count = u.artist.count(" - ")
                if count > 3:
                    names = u.artist.split(" - ")
                    splitname = names[:3]
                    ret = " - ".join(splitname)  
                    ret = ret + ", and more."
                    uniqueSongs.add((u.artist,u.name))
                    artistList.append(ret)
                else:
                    uniqueSongs.add((u.artist,u.name))
                    artistList.append(u.artist)
                urlList.append(u.URL)
                nameList.append(u.name)
                buffer = buffer + 1
            if int(buffer) >= int(song_amt):
                break
            if (v.artist,v.name) not in uniqueSongs:
                count = v.artist.count(" - ")
                if count > 3:
                    names = v.artist.split(" - ")
                    splitname = names[:3]
                    ret = " - ".join(splitname)  
                    ret = ret + ", and more."
                    artistList.append(ret)
                    uniqueSongs.add((v.artist,v.name))
                else:
                    uniqueSongs.add((v.artist,v.name))
                    artistList.append(v.artist)
                nameList.append(v.name)
                urlList.append(v.URL)
                buffer = buffer + 1
                if int(buffer) >= int(song_amt):
                    break
        result = list(zip(artistList, nameList,urlList))
        return result[:song_amt]

    def __str__(self):
        return str(type(self.__songs))