class Song:
    def __init__(self, name, artist, genre, ex, time, dance, nrg, key, loud, speech, acoustic,
               ins, live, valence, tempo):
        self.name = name
        self.artist = artist
        self.genre = genre
        self.ex = ex
        self.time = time
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

def CalculateSimilarities(song1, song2):
    returnValue = 0.00
    if not(song1.artist == song2.artist):
        returnValue += 0.05
    returnValue += ((abs(float(song1.tempo) - float(song2.tempo))) / 100)
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