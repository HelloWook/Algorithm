import sys
input = sys.stdin.readline

# 입력부 
N = int(input())
M = int(input())
S = input().rstrip()
p = 'I' + 'OI' * N

start  ,p, count = 0 , 0 , 0

while start < (M - 1):
    if S[start:start + 3] == 'IOI': 
        p += 1
        start += 2
        if p == N:      
            count += 1     
            p -= 1
    else:
        p = 0
        start += 1

print(count)