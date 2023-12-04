import pandas as pd
import networkx as nx
from api.scripts import Songpy

class Graph:

    def __init__(self, songDB):
        self.G = nx.Graph()
        self.songs = songDB
    
    def __str__(self):
        return self.songs