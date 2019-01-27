import os
import sys
import random
import load_dict
from math import pi,sqrt,sin,cos,atan2

D = load_dict.load_obj('tags')
DReview = load_dict.load_obj('reviewpostTags')
fTopic = open('topic1.txt','r')
aTopic = []
allFilenames = []
chosenOne = set()
def TagsIntoScore(tags):
    score = []
    for item in tags:
        st = item.split('_')
        score.append((int(st[1]),st[0]))
    score.sort()
    score = score[::-1]
    return score

for filename in os.listdir():
    if(filename[-7:] == 'UTC.txt'):
        allFilenames.append(filename)
for line in fTopic:
    st = line.split()
    if(st[0] == 'Topic'):
        st = st[2:]
        ss = set()
        for item in st:
            ss.add(item)
        aTopic.append(ss)

def haversine_distance(lat1,long1,lat2,long2):
    degree_to_rad = float(pi / 180.0)

    d_lat = (lat2 - lat1) * degree_to_rad
    d_long = (long2 - long1) * degree_to_rad

    a = pow(sin(d_lat / 2), 2) + cos(lat1 * degree_to_rad) * cos(lat2 * degree_to_rad) * pow(sin(d_long / 2), 2)
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    km = 6367 * c
    #mi = 3956 * c
    return km
def randomize():
    m = random.randint(0,len(allFilenames)-1)
    return allFilenames[random.randint(0,m)]
def generate(lat,lon,tags):
    score = TagsIntoScore(tags)
    n = random.randint(1,5)
    if(n == 1):
        return allFilenames[random.randint(0,len(allFilenames)-1)]
    elif(1 < n < 3):
        s = set()
        l = []
        for a in aTopic:
            for i in range(0,min(3,len(score)-1)):
                if(score[i] in a):
                    s.add(a)
        for item in s:
            l.append(item)
        m = random.randint(0,len(l) - 1)
        cnt = 0
        if(len(l) == 0):

        while(l[m] in chosenOne):
            m = random.randint(0,len(l) - 1)
            cnt += 1
            if(cnt > 10):
                return randomize()
        return l[m]
    else:
        #pick top 3 choose closest store
        return randomize()
    

def update(lat,lon,tags,Rname,timestamp):
    score = TagsIntoScore(tags)
    if(len(DReview) == 0): 

    for filename in DReview:
    return str(lat) + "," + str(lon) + ""

if __name__ == "__main__":
    nArg = len(sys.argv)
    if(nArg == 5):
        if(sys.argv[1] == '-U' or sys.argv[1] == '--update-user'):
            mul = int(sys.argv[4])
            st = sys.argv[2]
            a = st.split(',')
            st2 = sys.argv[3]
            a2 = st2.split(',')
            lat,lon = float(st[0]),float(st[1])
            tags = st[2:]
            Rname = 
            return update(lat,lon,tags,Rname,mul)
        else:
            print('Invalid Argument (2)')
            return -1
    elif(nArg == 3):
        if(sys.argv[1] == '-L' or sys.argv[1] == '--load-feed'):
            st = sys.argv[2]
            a = st.split(',')
            lat,lon = float(st[0]),float(st[1])
            tags = st[2:]
            return generate(lat,lon,tags)
        else:
            print('Invalid Argument (3)')
            return -1
    else:
        return randomize()