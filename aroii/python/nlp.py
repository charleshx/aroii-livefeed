import sys
import os
from pythainlp.tokenize import word_tokenize
from pythainlp.summarize import summarize_text
from pythainlp.romanization import romanization
text='คาเฟ่ชาสุดพรีเมี่ยมมาเปิดที่ Seenspace ทองหล่อแล้วน้า ยังคงเสิร์ฟชาระดับพรีเมี่ยมเหมือนเดิม ก่อนเลือกสั่ง จะมีชาให้เทสกลิ่นก่อนด้วยน้า ความพิเศษของสาขานี้คือได้ เบเกอร์รี่จาก Eric Kayser ครัวซองค์หอมๆ พร้อมเสิร์ฟ รวมถึงมีอาหารจาก White Shuffle ด้วย เรียกได้ว่ามานั่งชิวที่เดียวครบทั้งคาวหวานเลย ใครเคยไปมาที่หัวหินมาแล้วติดใจ ต้องรีบไปเช็คอินที่กรุงเทพฯ แล้วล่ะ'
c=word_tokenize(text,engine='mm')
d=word_tokenize(text,engine='longest-matching')
e=summarize_text(text, 5, engine='frequency', tokenizer='newmm')
f=romanization(text, engine='royin')
g=[]
for item in d:
    g.append(romanization(item, engine='royin'))
print(f)
print(g)
