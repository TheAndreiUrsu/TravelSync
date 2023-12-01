import pandas as pd

import csv
import pandas as pd


class Song:
    def _init_(self, id, title, artist, rank, country, time, album, dance, nrg, key, loud, speech, acoustic,
               ins, live, valence, tempo, genre):
        self.id = id
        self.title = title
        self.artist = artist
        self.rank = rank
        self.genre = genre
        self.country = country
        self.time = time
        self.album = album
        self.dance = dance
        self.nrg = nrg
        self.key = key
        self.loud = loud
        self.speech = speech
        self.acoustic = acoustic
        self.ins = ins
        self.live = live
        self.valence = valence
        self.tempo = tempo
        self.index = -1

def CalculateSimilarities(song1, song2):
    returnValue = 0.00
    if not(song1.artist == song2.artist):
        returnValue += 0.05
    returnValue += ((abs(float(song1.time) - float(song2.time))) / 100)
    if not(song1.album == song2.album):
        returnValue += 0.05
    returnValue += (abs(float(song1.dance) - float(song2.dance)))
    returnValue += (abs(float(song1.nrg) - float(song2.nrg)))
    if not(song1.key == song2.key):
        returnValue += 0.05
    returnValue += (abs(float(song1.loud) - float(song2.loud)))
    returnValue += (abs(float(song1.speech) - float(song2.speech)))
    returnValue += (abs(float(song1.acoustic) - float(song2.acoustic)))
    returnValue += (abs(float(song1.ins) - float(song2.ins)))
    returnValue += (abs(float(song1.valence) - float(song2.valence)))
    #print(returnValue)
    return returnValue



Dictionary = {}
DictionaryTo = {}

#Step 1. Obtaining API Of 100,000 songs from csv into appropiate number of red/black tree(s) (Dictionary)
#Key = ID, Value = Song object containing other variables

df = pd.read_csv('C:/Users/delam/TravelSync/TravelSync/Data/dataset/kaggle/top_songs_per_country.csv')
temp = Song()
# temp.id = id
# temp.title = name
# temp.artist = artist
# temp.rank = rank
# temp.genre = genre
# temp.country = country
# temp.time = time
# temp.album = album
# temp.dance = dance
# temp.nrg = nrg
# temp.key = key
# temp.loud = loud
# temp.speech = speech
# temp.acoustic = acoustic
# temp.ins = ins
# temp.live = live
# temp.valence = valence
# temp.tempo = tempo
Dictionary[id] = temp
print(len(Dictionary))
#Step 2. User Input (Country(s), Playlist Length)

isFound = False
while(not(isFound)):
    countryTo = input("Enter the country you are traveling to ")
    for i in Dictionary:
        if Dictionary[i].country == countryTo:
            isFound = True
            break
    if not(isFound):
        print("Country does not exist. Try again or enter the country in ISO 3166-1 alpha-2 format")

for i in Dictionary:
    if Dictionary[i].country == countryTo:
        DictionaryTo[Dictionary[i].id] = Dictionary[i]

isFound = False
while(not(isFound)):
    try:
        length = int(input("Enter number of songs: "))
        if(length <= 0):
            print("Please enter a value greater than 0")
            continue
        else:
            break
    except ValueError:
        print("Please enter an integer")

temp = 0
for i in DictionaryTo:
    DictionaryTo[i].index = temp
    temp += 1

size = len(DictionaryTo)
Matrix = [[None for _ in range(size)] for _ in range(size)]
for i in DictionaryTo:
    for j in DictionaryTo:
        if i == j:
            continue
        elif Matrix[DictionaryTo[i].index][DictionaryTo[j].index] is not None:
            continue
        else:
            Matrix[DictionaryTo[i].index][DictionaryTo[j].index] = CalculateSimilarities(DictionaryTo[i], DictionaryTo[j])
            Matrix[DictionaryTo[j].index][DictionaryTo[i].index] = CalculateSimilarities(DictionaryTo[i], DictionaryTo[j])
print(len(Dictionary))