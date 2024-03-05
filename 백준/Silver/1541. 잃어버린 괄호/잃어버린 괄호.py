import sys 
import re 
input = sys.stdin.readline
sum = 0 
sign = 0
x = input()
list = list(map(int, re.findall("-?\d+", x)))
for i in list :
    if i<0:
        sign =1
    if sign==0:
        sum +=i
    else :
        sum -= abs(i)
print(sum)