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


## Data Overview

### 1. Source
The dataset utilized in TravelSync is sourced from [Kaggle](https://www.kaggle.com/datasets/pepepython/spotify-huge-database-daily-charts-over-3-years) and is titled "Spotify HUGE database - daily charts over 3 years" by user "pepe." This dataset spans over 170,000 datapoints and is derived from Spotify's Daily Top 200 Charts across 35 countries, including global charts, from 2017 to 2020.

### 2. Dataset Characteristics
- **Duplicates:** The dataset initially contained duplicates due to similar songs appearing in different countries. To maintain uniqueness, we categorized the data by country, ensuring that not every country would have the same songs.
-  **Format:** The dataset is stored as a CSV (comma-separated values) file with various columns such as title, URI, country, popularity, artist, album, genre, and more.

### 3. Data Cleaning
After downloading the CSV file, we performed data cleaning to remove unnecessary columns. Columns like artist_followers, album, track_album, track_number, release_date, album/single, and others related to in-depth song classification were eliminated. The remaining columns were renamed for use in our application:

### 4. Data Types
#### **Integers**
 * id
 * key

#### **Strings**
 - Country
 - Uri
 - Name
 - Artist
 - Genres

#### **Boolean**
 - Explicit

#### **Floating Point Numbers**
 - danceability
 - energy
 - key
 - loudness
 - speechiness
 - acoustics
 - instrumentalness
 - liveliness
 - valence
 - tempo
 - duration_s


## Tools/Languages/APIs/Libraries Used
### 1. Frontend
- **ReactJS:** Utilized as the JavaScript frontend framework, ReactJS provides a robust foundation for developing dynamic and responsive web applications.
### 2. Backend
- **Django with REST:** The backend is powered by Django, a Python framework for web applications. RESTful architecture is implemented to facilitate seamless communication between the frontend and backend components.
### 3. Data Storage
- **SQLite3 Database:** The data is stored in an SQLite3 Database, a C-based library known for its efficiency and speed in handling small to medium-sized SQL databases.
### 4. Development Tools
- **Visual Studio Code:** This popular code editor was used for efficient development, providing a range of features to enhance the coding experience.

- **GitHub:** Version control and collaboration were managed using GitHub, enabling effective team collaboration and code tracking.

- **SQLite Studio:** This tool was employed for managing and interacting with the SQLite3 database, offering a user-friendly interface for database operations.

5. Python Library
- **networkx:** To implement graph structures for storing songs, the Python library networkx was utilized. This library offers a versatile and efficient graph implementation, contributing to the algorithm's functionality within the application.


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
