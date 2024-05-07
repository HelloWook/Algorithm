from collections import deque

Num = int(input())
graph = [list(map(int, input().split())) for _ in range(Num)]
result = 0
maxHeight = max(max(row) for row in graph)

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

def bfs(a, b, height, visited_array):
    queue = deque([(a, b)])
    visited_array[a][b] = 1

    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = dx[i] + x
            ny = dy[i] + y
            if 0 <= nx < Num and 0 <= ny < Num:
                if visited_array[nx][ny] == 0 and graph[nx][ny] > height:
                    visited_array[nx][ny] = 1
                    queue.append((nx, ny))

for i in range(maxHeight):
    visited = [[0] * Num for _ in range(Num)]
    cnt = 0
    for j in range(Num):
        for k in range(Num):
            if graph[j][k] > i and visited[j][k] == 0:
                bfs(j, k, i, visited)
                cnt += 1
    result = max(result, cnt)

print(result)
