from sklearn.feature_extraction.text import CountVectorizer
from sklearn.decomposition import LatentDirichletAllocation
from sklearn.datasets import fetch_20newsgroups
import numpy as np
from pythainlp.romanization import romanization
from pythainlp.tokenize import word_tokenize
import deepcut
import sys
import os
n_samples = 2000
n_features = 10000
n_components = 50
n_top_words = 10

#dataset = fetch_20newsgroups(shuffle=True, random_state=1,
#                            remove=('headers', 'footers', 'quotes'))

#data_samples = dataset.data[:n_samples]

#for index, doc in enumerate(data_samples[0:3]):
#  print("Document number: ",index+1)
#  print(doc)
# for item in os.listdir():
#     if(item[-7:] == 'UTC.txt'):
#         print(item)
#         f = open(item,'r')
#         st = ""
#         for line in f:
#             a = deepcut.tokenize(line)
#             st += " ".join(a)
#         f2 = open('test_data_2.txt','a')
#         f2.write(st)
#         f2.close()
#         f.close()


data_samples = open('test_data_2.txt','r')

tf_vectorizer = CountVectorizer(max_df=0.95, min_df=2,
                                max_features=n_features,
                                stop_words='english')

tf = tf_vectorizer.fit_transform(data_samples)
feature_name = tf_vectorizer.get_feature_names()
index_dict = dict(enumerate(feature_name))
print(index_dict)
print(tf.toarray()[0])

lda = LatentDirichletAllocation(n_components=n_components, max_iter=50,
                                learning_method='online',
                                learning_offset=50.,
                                random_state=0)
lda.fit(tf)

def print_top_words(model, feature_names, n_top_words):
    for topic_idx, topic in enumerate(model.components_):
        message = "Topic #%d: " % topic_idx
        message += " ".join([feature_names[i]
                             for i in topic.argsort()[:-n_top_words - 1:-1]])
        print(message)
    print()

print("Word distribution before normalizing (first 10 values)")
print(lda.components_[0][0:10])
print("Word distribution after normalizing (first 10 values)")
print((lda.components_ / lda.components_.sum(axis=1)[:, np.newaxis])[0][0:10])
print("Summation of word distribution of topic 0")
print(sum((lda.components_ / lda.components_.sum(axis=1)[:, np.newaxis])[0]))

tf_feature_names = tf_vectorizer.get_feature_names()

print_top_words(lda, tf_feature_names, n_top_words)