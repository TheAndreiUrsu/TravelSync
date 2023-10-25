# TravelSync
![Logo]("")
## Problem
Imagine you are an avid traveler, and you like traveling to other countries to experience their rich cultures. Aside from visiting monuments, eating new cuisine, and taking memorable pictures, music becomes an outlet to experience culture through a new lens. Unfortunately, travelers are unfamiliar with local music genres and musicians, limiting their impression of a country's creative realm.

## Motivation
Culture shock becomes a prominent issue amongst travelers; it is an issue that can lead to cultural misunderstanding and homesickness. Getting a glimpse into the music of a country allows users to feel a sense of connection with a country's art asides from appreciating the country's architecture and touristic locations. TravelSync is motivated to create appreciation for local music within a traveler, leading to the decrease of culture shock during their stay in a foreign country.

## Features

**Curated Music Recommendations**: 
* Users will receive a curated list of songs that highlight local music genres and musicians. 
* These recommendations take into consideration the user's personal music preferences.

**Reduced Cultural Shock**: 
  * Utilizing TravelSync will result in a decrease in cultural shock within the users during their stay in a foreign country.

## Data
 We are using the Spotify API to access music data for various countries. 

## Tools
* **Python**: The core programming language for TravelSync.
* **Django**: A high-level Python web framework used for building the web application.
## Visuals

 **Input Page**: 
* This page includes four drop-down menus that collect information on the user's music preferences and the country they are interested in. 
* It also includes buttons to initiate and restart the recommendation process.

 **Output Page**: 
  * Users will see a list of recommended songs with a play button next to each song, allowing them to preview the music. 
  * Includes buttons to start the recommendation process anew.

## Strategy
To efficiently store and recommend music, we plan to implement the following strategies:

 **Red-Black Trees**: 
 * We will use red-black trees to store the music data with the song name and artist as the key and its metadata as the values. 
 * This data structure allows for fast access to songs based on the user's requested genre, length, and country.

 **Graph Structure**: 
 * The 20 chosen songs will be placed in a graph structure where the nodes represent songs, and the weighted edges represent the similarity between songs. 
 * This similarity is based on factors like tempo and rhythm, ensuring a better listening experience. 
 * We will use algorithms such as Dijkstra's and Bellman-Ford to navigate this graph.

## Resources
### Packages
* [Spotipy Package](https://spotipy.readthedocs.io/en/2.22.1/)
* [Django Package](https://docs.djangoproject.com/en/4.2/)
* [Python Virtual Environment (venv)](https://docs.python.org/3/library/venv.html)

### Algorithms
* [Dijkstra's Algorithm](https://www.scaler.com/topics/data-structures/dijkstra-algorithm/)
* [Bellman–Ford Algorithm](https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/)
* [BFS Graph](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)

### Data Structures
* [Red-Black Tree Data Structure](https://www.geeksforgeeks.org/introduction-to-red-black-tree/)
* [Graph Data Structure](https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/)
