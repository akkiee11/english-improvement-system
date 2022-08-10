import numpy as np
import pandas as pd

books = pd.read_csv('BX-Books.csv', sep=';', error_bad_lines=False, encoding="latin-1")

books.columns

books=books[['ISBN', 'Book-Title', 'Book-Author', 'Year-Of-Publication', 'Publisher']]

books.rename(columns={'Book-Title':'title','Book-Author':'author','Year-Of-Publication':'year','Publisher':'publisher'},inplace=True)

books.head()

users = pd.read_csv('BX-Users.csv', sep=';', error_bad_lines=False, encoding="latin-1")

users.rename(columns={'User-ID':'user_id','Location	':'location','Age':'age'},inplace=True)

users.head(2)

ratings = pd.read_csv('BX-Book-Ratings.csv', sep=';', error_bad_lines=False, encoding="latin-1")

ratings.head(2)

ratings.rename(columns={'User-ID':'user_id','ISBN':'ISBN','Book-Rating':'rating'},inplace=True)

ratings.head(2)

books.shape

users.shape

ratings.shape

x=ratings['user_id'].value_counts()>200

y=x[x].index

y

ratings=ratings[ratings['user_id'].isin(y)]

ratings.shape

ratings.head()

ratings_with_books=ratings.merge(books,on='ISBN')

ratings_with_books

number_rating=ratings_with_books.groupby('title')['rating'].count().reset_index()

number_rating.rename(columns={'rating':'no of ratings'},inplace=True)

number_rating.head()

final_rating=ratings_with_books.merge(number_rating,on='title')

final_rating.shape

final_rating=final_rating[final_rating['no of ratings']>=50]

final_rating.shape

final_rating.drop_duplicates(['user_id','title'],inplace=True)

final_rating.shape

# final_rating.to_csv('final_rating.csv', index=False,encoding='utf-8')

book_pivot=final_rating.pivot_table(columns='user_id',index='title',values='rating')

book_pivot.fillna(0,inplace=True)

book_pivot

from scipy.sparse import csr_matrix
books_sparse=csr_matrix(book_pivot)

type(books_sparse)

from sklearn.neighbors import NearestNeighbors 
model=NearestNeighbors(algorithm='brute')

model.fit(books_sparse)

distances,suggestions=model.kneighbors(book_pivot.iloc[10,:].values.reshape(1,-1),n_neighbors=6)

# suggestions

# for i in range(len(suggestions)):
#   print(book_pivot.index[suggestions[i]])

book_pivot.index[10]

def recommend_book(book_name):
  book_id=np.where(book_pivot.index==book_name)[0][0]
  distances,suggestions=model.kneighbors(book_pivot.iloc[book_id,:].values.reshape(1,-1),n_neighbors=6)
  booklist=[]
  for i in range(len(suggestions)):

    str=book_pivot.index[suggestions[i]]
    booklist.append(str)
  return booklist        