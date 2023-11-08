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

def search(token, artist_name):
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

def get_songs_by_artist(token, artist_id):
    # searching for a specific artist and getting their top tracks in the US
    url = f"https://api.spotify.com/v1/artists/{artist_id}/top-tracks?country=US"
    headers = get_auth_header(token)
    result = get(url, headers=headers)
    json_result = json.loads(result.content)["tracks"]
    return json_result


token = get_token()
result = [search(token, "The Weeknd"), search(token, "Queen")]
print(result[1])
#artist_id = result["id"]
#songs = get_songs_by_artist(token, artist_id)

# Displays the top tracks from the artist in the country.
'''for idx, song in enumerate(songs):
    print(f"{idx+1}. {song['name']}")'''
