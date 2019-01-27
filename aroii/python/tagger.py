import os
import sys
import pickle
#default manually generated tags
a = ['ก๋วยเตี๋ยว', 'ชาบู', 'สุกี้', 'หม้อไฟ', 'คาเฟ่', 'หมูกระทะ', 'ติ่มซำ', 'ซีฟู๊ด', 'คาเฟ่', 'ญี่ปุ่น', 'อีสาน', 'ใต้', 'ไทย', 'เช้า', 'ปิ้ง', 'ย่าง', 'พิซซ่า', 'เหล้า'
, 'เบียร์', 'ไวน์', 'เกาหลี', 'ฝรั่งเศส', 'เวียดนาม', 'จีน', 'ไอศกรีม', 'อิสลาม', 'อิตาเลียน', 'แม็กซิกัน', 'เบอเกอร์', 'เยอรมัน', 'โรงแรม', 'หน้าเนื้อ', 'เนื้อ', 'ชีส', 'น้ำจิ้ม', 'ห้าง', 'สยาม'
, 'ท้องถิ่น', 'แลป', 'หม้อไฟ', 'ชา', 'เครื่องดื่ม', 'เค้ก', 'สลัด', 'ผัก', 'แป้ง', 'โมจิ','ผลไม้', 'กาแฟ','ขนม'
, 'noodle', 'shabu', 'suki', 'cafè', 'seafood', 'bakery', 'pizza','nutella'
, 'burger', 'fast', 'dim sum', 'japanese', 'thai', 'chinese', 'korea', 'liquor', 'beer', 'wine', 'france', 'vietnamese', 'ice-cream', 'islam', 'italian', 'mexican', 'german'
, 'hotel', 'steak', 'beef', 'cheese', 'department store', 'siam', 'local', 'lab', 'tea', 'drink', 'cake', 'salad', 'vegetable', 'beverage','fruit'
, 'coffee']

#append additional data from tokenized Wongnai corpus
check = dict()
ff = open('labeled_queries_by_judges.txt','r')
for line in ff:
    st = line.split('|')
    st = [e.strip() for e in st if len(e) > 2]
    for item in st:
        if(not item in check):
            a.append(item)
            check[item] = True

print('Size of the new vocab list is ',len(a))

D = dict()

def save_obj(obj, name ):
    with open(name + '.pkl', 'wb') as f:
        pickle.dump(obj, f, pickle.HIGHEST_PROTOCOL)

def load_obj(name ):
    with open(name + '.pkl', 'rb') as f:
        return pickle.load(f)
ncnt=0
ncntList = []
for item in os.listdir():
    if(item[-7:] == "UTC.txt"):
        #print(item)
        f = open(item,'r')
        st = ""
        b = []
        for line in f:
            st += line.lower()
        for keyword in a:
            b.append((st.count(keyword),keyword))
        b.sort()
        b = b[::-1]
        #print(b)
        f.close()
        for i in range(10):
            if(b[i][0] <= 0):
                ncntList.append(item)
                ncnt+=1
                break
            if b[i][1] not in D:
                D[b[i][1]] = set()
                D[b[i][1]].add(item)
            else:
                D[b[i][1]].add(item)
save_obj(D, "tags")
print('done... There are ' + str(ncnt) + 'files that did not find any tags present')
for item in ncntList:
    print(item)
print(D)