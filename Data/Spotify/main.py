import pandas as pd
import Song as s
import networkx as nx


df = pd.read_csv('C:/Users/delam/TravelSync/TravelSync/Data/dataset/kaggle/top_songs_per_country.csv')


country = input("Enter Country ")
df_co = df[df["Country"] == country]
songs = [s.Song(df_co["Name"][i], df_co["Artist"][i], df_co["Genres"][i], df_co["Explicit"][i], df["duration_s"][i], df["danceability"][i], df["energy"][i], df["key"][i], df["loudness"][i], df["speechiness"][i], df["acoustics"][i], df["instrumentalness"][i], df["liveliness"][i], df["valence"][i], df["tempo"][i]) for i in range(len(df_co))]

Dictionary = { country:songs }
#print(Dictionary[country])


genre = input("Enter Genre ")
values = [s.CalculateSimilarities(Dictionary[country][1], Dictionary[country][i], genre) for i in range(len(Dictionary[country]))]


G = nx.Graph()
for i in Dictionary[country]:
    for j in Dictionary[country]:
        if (i == j):
            continue
        elif i.isVisited and j.isVisited:
            continue
        G.add_edge(i, j, weight=s.CalculateSimilarities(i,j, genre))
        #print(s.CalculateSimilarities(i,j, genre))
        i.isVisited = True
        j.isVisited = True


length = input("Enter number of songs ")
mst = nx.minimum_spanning_tree(G)
buffer = 0
for u,v,a in mst.edges(data=True):
    if buffer == 0:
        print(u.artist)
        print(u.name)
        buffer = buffer + 1
    if int(buffer) >= int(length):
        break
    print(v.artist)
    print(v.name)
    buffer = buffer + 1
    if int(buffer) >= int(length):
        break


length = input("Enter number of songs ")
mst = nx.minimum_spanning_tree(G)
buffer = 0
artistList = []
nameList = []
for u,v,a in mst.edges(data=True):
    if buffer == 0:
        count = u.artist.count(" - ")
        if count > 3:
            names = u.artist.split(" - ")
            splitname = names[:3]
            ret = " - ".join(splitname)  
            ret = ret + ", etc."
            artistList.append(ret)
        else:
            artistList.append(u.artist)
        nameList.append(u.name)
        buffer = buffer + 1
    if int(buffer) >= int(length):
        break
    count = v.artist.count(" - ")
    if count > 3:
        names = v.artist.split(" - ")
        splitname = names[:3]
        ret = " - ".join(splitname)  
        ret = ret + ", etc."
        artistList.append(ret)
    else:
        artistList.append(v.artist)
    nameList.append(v.name)
    buffer = buffer + 1
    if int(buffer) >= int(length):
        break
    #print(a)
result = list(zip(artistList, nameList))
#print(result)