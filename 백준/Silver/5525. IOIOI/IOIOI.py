import sys
input = sys.stdin.readline

# 입력부 
N = int(input())
M = int(input())
S = input().rstrip()
p = 'I' + 'OI' * N

# 패턴 매칭
count = 0
for i in range(M - len(p) + 1):
    if S[i:i + len(p)] == p:
        count += 1

print(count)