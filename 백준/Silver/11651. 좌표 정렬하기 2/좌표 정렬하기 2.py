num = []
N = int(input())
for i in range(N):
    num.append(list(map(int, input().split())))

num.sort(key=lambda x: (x[1], x[0]))
for i in range(N):
    print(num[i][0], num[i][1])
