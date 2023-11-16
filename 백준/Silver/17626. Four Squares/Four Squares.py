import sys
input = sys.stdin.readline
n = int(input())
d = [1e9] * (n+1)
d[0] = 0
for i in range(n+1):
    j = 1
    while (j**2) <= i:
        d[i] = min(d[i], d[i - (j**2)]+1)
        j += 1
print(d[n])