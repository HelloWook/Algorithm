import sys
input = sys.stdin.readline

target = int(input())
broken = int(input())

broken_button = []
if broken:
    broken_button = list(map(int, input().strip().split()))

count = abs(100 - target)

for i in range(1000001):
    num = str(i)
    for j in num:
        if int(j) in broken_button:
            break
    else:
        count = min(count, abs(target - i) + len(num))

print(count)
