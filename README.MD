# TravelSync

## Navigation to other Docs  
- [Django](Packages%20-%20Examples/Django/README_Django.md)

## Problem
Imagine you are an avid traveler, and you like traveling to other countries to experience their rich cultures. Aside from visiting monuments, eating new cuisine, and taking memorable pictures, music becomes an outlet to experience culture through a new lens. Unfortunately, travelers are unfamiliar with local music genres and musicians, limiting their impression of a country's creative realm.

## Motivation
Culture shock becomes a prominent issue amongst travelers; it is an issue that can lead to cultural misunderstanding and homesickness. Getting a glimpse into the music of a country allows users to feel a sense of connection with a country's art aside from appreciating the country's architecture and touristic locations. TravelSync is motivated to create an appreciation for local music within a traveler, leading to the decrease of culture shock during their stay in a foreign country.

## Features

Introducing TravelSync, your ultimate travel companion web app with a multitude of user-centric features. As you take your plane ticket on your global adventures, TravelSync begins by asking for your name to store in the database and retrieve your information. 

Designed for seamless integration with your travel experience, there are inputs for both your home country and your destination, adding to your cultural adventure with a curated playlist of songs that can be accessed through Spotify (only the song, not the playlist, and if you have a Spotify Free or Premium account). This feature allows for a world-expanding view of music, experiencing songs that you might not have heard of.

With our understanding of music is more than just sound, TravelSync takes playlist customization to the next level with an input for your favorite genre. Whether you’re mesmerized by the thundering riffs of Rock, the catchy, can’t get out of your head, tunes of Pop, or the feeling of wanting to shake every bone in your body of Electronic Dance, TravelSync finetunes its recommendations to align within your music tastes. 

Flexibility is key, and TravelSync allows for you to choose how many songs are in your playlist, whether it’s 1 song or 100k songs, the choice is yours. Perfect for the short plane rides, or the long 17+ hour plane rides. 

## Data
The dataset we used is from [kaggle](https://www.kaggle.com/datasets/pepepython/spotify-huge-database-daily-charts-over-3-years), titled Spotify HUGE database - daily charts over 3 years by user “pepe”. This data set contained over 170k data points to choose from. While searching for a dataset we had to ensure it didn’t have duplicates, but this one did. There are duplicates since there are similar songs in different countries but not every country will have all the same songs. We are categorizing the data by country, thereby keeping the uniqueness of the data. 
 

## Tools
* Frontend ReactJS - a JavaScript frontend framework for web applications.
* Backend Django with REST - a Python backend framework for web applications.
* Data Storage SQLite3 Database - a C-based library that uses a small but fast SQL database engine.
* Tools Visual Studio Code, Github, SQLite Studio
* Python Library networkx (Graph implementation for storing the songs in a graph).
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
