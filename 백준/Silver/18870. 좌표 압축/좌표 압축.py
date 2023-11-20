import sys
input = sys.stdin.readline

a = input()
b = list(map(int,input().split()))

c= sorted(set(b))
dic = {}
for i in range(len(c)):
    dic[c[i]] = i

for i in b:
    print(dic[i],end=' ')

