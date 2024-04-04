import sys
from collections import deque

# 입력부
N, M = map(int, input().rstrip().split())
ladder = [list(map(int, input().rstrip().split())) for _ in range(N)]
snake = [list(map(int, input().rstrip().split())) for _ in range(M)]
visited = [False] * 101
dice = [1, 2, 3, 4, 5, 6]
queue = deque()
queue.append([1, 0])
result = 0

while queue:
    num, count = queue.popleft()
    if num == 100:
        result = count
        break
    for i in range(6):
        nxnum = num + dice[i]
        if nxnum > 100 or visited[nxnum]:
            continue
        visited[nxnum] = True
        for k in range(len(ladder)):
            if ladder[k][0] == nxnum:
                nxnum = ladder[k][1]  
                break
        for j in range(len(snake)):
            if snake[j][0] == nxnum:
                nxnum = snake[j][1]  
                break
        queue.append([nxnum, count + 1])

print(result)