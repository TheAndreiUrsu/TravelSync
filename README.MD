# TravelSync

## Problem
As passionate travelers, we understand the challenges faced by those who seek to immerse themselves in the diverse cultures of the world. While visiting iconic landmarks and trying local cuisines are integral parts of the travel experience, music often remains an overlooked avenue for cultural exploration. Many travelers find themselves unfamiliar with the local music scene, limiting their understanding of a country's creative expression.

This app addresses the aforementioned issue by presenting a solution for avid travelers. Acknowledging music as a universal language that transcends cultural boundaries, we perceive this challenge as an opportunity for exploration and connection.

## Motivation
Culture shock is a prevalent issue among travelers, often leading to misunderstandings and homesickness. To mitigate this, we aim to provide users with a glimpse into the music of a country, fostering a sense of connection with its artistic expression beyond the visual aspects of architecture and tourist attractions. **TravelSync** seeks to cultivate an appreciation for local music, contributing to a reduction in culture shock during a traveler's stay in a foreign country.

## Features

### 1. User-Experience
As your ultimate travel companion web app, **TravelSync** offers a user-centric experience from the moment you embark on your global adventures. Upon entering your name, the app stores your information in the database for personalized interactions.

### 2. Cultural Adventure Playlist
Designed for seamless integration with your travel experience, **TravelSync** prompts you to input both your home country and your destination. It then generates a curated playlist of songs, accessible through Spotify (individual songs only, compatible with both Free and Premium Spotify accounts). This feature provides a world-expanding view of music, introducing you to songs you might not have encountered otherwise.

### 3. Genre-Based Customization
Understanding that music is more than just sound, **TravelSync** takes playlist customization to the next level. You can specify your favorite genre, whether you're into the thundering riffs of Rock, the catchy tunes of Pop, or the energetic beats of Electronic Dance. The app fine-tunes its recommendations to align with your unique music tastes.

### 4. Playlist Flexibility
Flexibility is key, and **TravelSync** empowers you to decide the size of your playlist. Whether you prefer a short selection for quick plane rides or an extensive compilation for long-haul flights lasting 17 hours or more, the choice is yours. Tailor your musical journey to suit the duration of your travels.


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
