body = []
k_info = []
k = 1
N = int(input())
for i in range(N):
    body.append(list(map(int, input().split())))

for i in range(N):
    k = 0
    for j in range(N):
        if body[i][0] < body[j][0] and body[i][1] < body[j][1]:
            k += 1
    k_info.append(k + 1)

for i in k_info:
    print(i, end=" ")
