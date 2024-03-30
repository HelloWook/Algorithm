import sys
from collections import deque

input = sys.stdin.readline

# 입력부
M, N, H = map(int, input().strip().split())
tomato_box = [[[int(x) for x in input().strip().split()] for _ in range(N)] for _ in range(H)]
queue = deque()
day = 0
Nripe = False

dx = [1, -1, 0, 0, 0, 0]
dy = [0, 0, 1, -1, 0, 0]
dz = [0, 0, 0, 0, 1, -1]

# 1이 들어있는 수 찾기
for i in range(H):
    for j in range(N):
        for k in range(M):
            if tomato_box[i][j][k] == 1:
                queue.append((k, j, i))

# bfs를 이용한 탐색
while queue:
    x, y, z = queue.popleft()
    for i in range(6):
        nx = dx[i] + x
        ny = dy[i] + y
        nz = dz[i] + z
        if 0 <= nz < H and 0 <= ny < N and 0 <= nx < M:  # 올바른 좌표인지 확인
            if tomato_box[nz][ny][nx] == 0:
                queue.append((nx, ny, nz))
                tomato_box[nz][ny][nx] = tomato_box[z][y][x] + 1 

# 익음 여부 확인
for i in range(H):
    for j in range(N):
        for k in range(M):
            if tomato_box[i][j][k] == 0:
                Nripe = True
            day = max(day, tomato_box[i][j][k])

if Nripe:
    print(-1)
else:
    print(day - 1)
