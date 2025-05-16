N = int(input())

maps = []

result = [[0]*N for _ in range(N)]

dx =[1,0,-1,0,1,-1,1,-1]
dy = [0,1,0,-1,1,-1,-1,1]


for i in range(N):
    maps.append(list(input()))

for y in range(N):
    for x in range(N):
        num = maps[y][x]
        if num.isdigit() : 
            bombCount = int(num)
            for k in range(8):
                nx = x + dx[k]
                ny = y + dy[k]
                if 0<=nx<N and 0<=ny<N :
                    result[ny][nx] += bombCount
        
for q in range(N):
    for w in range(N):
        if maps[q][w].isdigit() :
            result[q][w] = "*"
        elif result[q][w] >= 10 :
            result[q][w] = "M"

for f in range(N):
    for g in range(N):
        print(result[f][g],end='')
    print()

