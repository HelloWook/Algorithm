import sys 
from collections import deque
input = sys.stdin.readline

paint_count =[]

n, m = map(int, input().split())

graph = [list(map(int, input().strip().split())) for _ in range(n)]
queue = deque()
for i in range(n):
    for j in range(m):
        if graph[i][j] == 1:
            queue.append((i,j))

dx = [-1,0,1,0]
dy = [0,-1,0,1]

def bfs(graph, a, b):
    queue = deque()
    queue.append((a, b))
    graph[a][b] = 0
    count = 1
 
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0<= nx <n and 0<=ny<m: 
                if graph[nx][ny] == 1:
                    graph[nx][ny] = 0
                    queue.append((nx, ny))
                    count += 1
    return count

for i in range(n):
    for j in range(m):
        if graph[i][j] == 1:
            paint_count.append(bfs(graph, i, j))
 

if len(paint_count)==0:
    print(0)
    print(0)
else:
    print(len(paint_count))
    print(max(paint_count))