from dotenv import load_dotenv
import os
import base64
from requests import post, get
import json

# Loads the environment variables from .env
load_dotenv()

# Load client id
client_id = os.getenv("CLIENT_ID")

# Load client secret
client_secret = os.getenv("CLIENT_SECRET")

# gets the token by hashing the client id and client secret
def get_token():
    auth_string = client_id + ":" + client_secret
    auth_bytes = auth_string.encode("utf-8")
    auth_base64 = str(base64.b64encode(auth_bytes), "utf-8")

    url = "https://accounts.spotify.com/api/token"
    headers = {
        "Authorization" : "Basic " + auth_base64,
        "Content-Type" : "application/x-www-form-urlencoded" 
    }
    data = {"grant_type": "client_credentials"}
    
    # returns json data
    result = post(url, headers=headers, data=data)
    json_result = json.loads(result.content)
    token = json_result["access_token"]
    return token

def get_auth_header(token):
    return {"Authorization": "Bearer " + token}

def search_for_artist(token, artist_name):
    url = "https://api.spotify.com/v1/search"
    headers = get_auth_header(token)
    query = f"?q={artist_name}&type=artist&limit=1"

    query_url = url + query
    result = get(query_url, headers=headers)
    json_result = json.loads(result.content)["artists"]["items"]
    if len(json_result) == 0:
        print("No artist exists.")
        return None
    
    return json_result[0]

# Searches for genre
def search_for_genre(token, genre):
    url = "https://api.spotify.com/v1/search"
    headers = get_auth_header(token)
    query = f"?q={genre}&type=artist&limit=1"

    query_url = url + query
    result = get(query_url, headers=headers)
    json_result = json.loads(result.content)["artists"]["items"]
    if len(json_result) == 0:
        print("No artist exists.")
        return None
    
    return json_result[0]

# to get the genres, search by artist and return the genres
def get_genres(token, artist_id):
    url = f"https://api.spotify.com/v1/artists/{artist_id}"
    headers = get_auth_header(token)
    result = get(url, headers=headers)
    json_res = json.loads(result.content)

    return json_res['genres']

# Searches songs from artists\
def get_songs_by_artist(token, artist_id):
    # searching for a specific artist and getting their top tracks in the US
    url = f"https://api.spotify.com/v1/artists/{artist_id}/top-tracks?country=US"
    headers = get_auth_header(token)
    result = get(url, headers=headers)
    json_result = json.loads(result.content)["tracks"]
    return json_result

# Gets the available countries for Spotify
def get_countries(token):
    url = f"https://api.spotify.com/v1/markets"
    headers = get_auth_header(token)
    result = get(url, headers=headers)
    json_result = json.loads(result.content)
    return json_result

import pycountry

def get_country_name(code):
    country = pycountry.countries.get(alpha_2=code.upper())
    if(country is not None):
        return country.name

import random

# get a top 50 playlist from a random country
def get_top_50(token, country_code):
    url = f"https://api.spotify.com/v1/browse/featured-playlists/"
    query = f"?country={country_code}&limit=3"
    query_url = url + query
    headers = get_auth_header(token)
    result = get(query_url, headers=headers)
    json_result = json.loads(result.content)
    return json_result['playlists']['items'][0]['href']

# get a top 50 playlist from a random country
def get_top_50_url(token, country_code):
    url = f"https://api.spotify.com/v1/browse/featured-playlists/"
    query = f"?country={country_code}&limit=3"
    query_url = url + query
    headers = get_auth_header(token)
    result = get(query_url, headers=headers)
    json_result = json.loads(result.content)
    return json_result['playlists']['items']

# Gets songs from a playlist
def get_songs_from_playlist(token, playlist_endpoint):
    url = playlist_endpoint
    headers = get_auth_header(token)
    result = get(url, headers=headers)
    json_res = json.loads(result.content)
    return json_res



# top_songs = get_songs_from_playlist(token, top_50)
# with open("Data/top_songs_ES.json", "w") as outfile:
#    json.dump(top_songs, outfile)
# #print(top_songs)

# song_json = open("Data/top_songs_ES.json")
# songs = json.load(song_json)
# songs = songs['tracks']['items']
# name = songs['tracks']['items'][0]['track']['name']
# song_id = 
#[print(f"{i+1}: {e['track']['name']}") for i, e in enumerate(songs)]
# song_track = songs[0]['track']
# for idx, e in enumerate(song_track['artists'][0]):
#     print(e)


# song_dict = {}
# for i in range(len(songs)):

#     songs_ = songs[i]
#     song_track = songs_['track']


#     song_dict[song_track['id']] = {}
#     _song = song_dict[song_track['id']]
#     _song['title'] = song_track['name']
#     _song['artist'] = song_track['artists'][0]['name']
#     _song['popularity'] = song_track['popularity']
#     _song['explicit'] = song_track['explicit']
#     genres = get_genres(token, song_track['artists'][0]['id'])
#     _song['genres'] = genres['genres']
#     _song['duration_s'] = song_track['duration_ms'] / 1000

#     with open("Data/dataset/songs_meta.json","w") as outfile:
#         json.dump(song_dict, outfile)




# song__ = song_dict['id']
# song__['id'] = song_track['id']
# song__['title'] = song_track['name']
# song__['popularity'] = song_track['popularity']
# song__['explicit'] = song_track['explicit']

# song_artist = song_track['artists'][0]

# song_dict['artist'] = {}
# artist_dict = song_dict['artist']
# artist_dict["id"] = song_artist['id']
# artist_dict["name"] = song_artist['name']

# genres = get_genres(token, artist_dict.get("id"))['genres']
# song__['genres'] = genres



# print(song_dict)


# for idx, e in enumerate(songs):
#     print(e)

#get countries avaliable
# countries = get_countries(token)
# with open("Data/countries.json", "w") as outfile:
#     json.dump(countries, outfile)


# test writing to music_data.json
# with open("Data/music_data.json", "w") as outfile:
#     json.dump(result, outfile)

#artist_id = result["id"]
#songs = get_songs_by_artist(token, artist_id)

# Displays the top tracks from the artist in the country.
'''for idx, song in enumerate(songs):
    print(f"{idx+1}. {song['name']}")'''
