class Song:
    def __init__(self, song_id, name, artist, uri):
        self.song_id = song_id
        self.name = name
        self.artist = artist
        self.uri = uri
    
    def __str(self):
        return f"{self.name} by {self.artist}"

class Playlist:
    def __init__(self, playlist_id, name, songs):
        self.playlist_id
        self.name = name
        self.songs = songs

