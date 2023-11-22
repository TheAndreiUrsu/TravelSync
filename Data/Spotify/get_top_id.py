from googlesearch import search
import json

def get_result(query):
    search_res = search(query)
    first_res = next(search_res)
    return first_res