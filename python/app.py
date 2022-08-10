from flask import Flask, render_template,Response,request
import json
from datetime import datetime
from featureExtractors import getMatchScore
from featureExtractors1 import recommend_book


import requests
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/getAccuracy',methods=['POST'])
@cross_origin()
def getAccuracy():
    data = request.get_json()
    word = data.get('word')
    wordSpoken = data.get('wordSpoken')
    result = getMatchScore(word,wordSpoken)   
    print(word,wordSpoken,result)     
    return Response(response=json.dumps({'accuracy': result}), mimetype="application/json")

@app.route('/getBooks',methods=['POST'])
@cross_origin()
def getBooks():
    data = request.get_json()
    book_name = data.get('word')
    # wordSpoken = data.get('wordSpoken')
    book = recommend_book(book_name)
    b1=book[0]
    return Response(response=json.dumps({'accuracy': b1[1],'accuracy1':b1[2], 'accuracy2':b1[3], 'accuracy3':b1[4], 'accuracy4':b1[5]}), mimetype="application/json")



if __name__ == "__main__":
    app.run(debug=True,port=8080)
    
    # .\env\Scripts\activate.ps1