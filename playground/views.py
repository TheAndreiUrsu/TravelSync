from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# request -> response
# request handler
# action 

def say_hello(request):
    s = "John"
    return HttpResponse(f'Hello World, {s}!')

def image(request):
    image_data = open("playground/tree.jpg", "rb").read()
    return HttpResponse(image_data, content_type="image/jpg")