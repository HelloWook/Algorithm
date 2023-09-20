import sys
num = int(sys.stdin.readline())

# 스택을 구현하기 위한 리스트
x = []

for i in range(num):
    n = sys.stdin.readline().split()
    if n[0] == "push":
        x.append(n[1])
    elif n[0] == "pop":
        if len(x) == 0:
            print(-1)
        else:
            d = x[-1]
            x.pop()
            print(d)
    elif n[0] == "size":
        print(len(x))
    elif n[0] == "empty":
        if len(x) == 0:
            print(1)
        else:
            print(0)
    elif n[0] == "top":
        if len(x) == 0:
            print(-1)
        else:
            print(x[-1])
