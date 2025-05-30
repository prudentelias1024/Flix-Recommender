from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import re
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import numpy as np
import json
# Create your views here.

movies = pickle.load(open('data.pkl','rb') )
# tf_idf = pickle.load(open('tf_idf.pkl','rb') )
vectorizer = TfidfVectorizer(stop_words="english")
tf_idf = vectorizer.fit_transform(movies['info'])
   

@api_view(['POST'])
def search_movie(req):
    query = req.data['query']
    result = []
    processed = re.sub("[^a-zA-Z0-9]", " ", query.lower())
    query_vec = vectorizer.transform([processed])
    similarity = cosine_similarity(query_vec, tf_idf).flatten()
    indices = np.argpartition(similarity, -50)[-50:]

    title_list = []
    title = movies['title'].iloc[indices]
    title_list = list(map(lambda x: " " if  x == " "  else x, title))
    
    poster_list = []
    poster_path = movies['poster_path'].iloc[indices]
    poster_list = list(map(lambda x:  " " if str(x) == "nan" or str(x) == "NaN" else x, poster_path))
    
    result = []
    for i in range(0, len(title_list)):
        result.append({"title": title_list[i], "poster_path": poster_list[i]})
    
    if len(title_list) == 0:
        return Response("Movie not found in our dataset")
    else:      
        return Response(json.dumps(result))
    
