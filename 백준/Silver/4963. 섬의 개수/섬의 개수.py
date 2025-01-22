import sys
input = sys.stdin.readline
sys.setrecursionlimit(10000)


def dfs(x, y):
    visited[y][x] = True
    
    for direction in directions:
        dx, dy = direction
        nx = x + dx
        ny = y + dy
        
        if 0 <= ny < h and 0 <= nx < w and not visited[ny][nx] and world[ny][nx] == 1:
            dfs(nx, ny)

while True:
    w, h = map(int, input().split())
    if w ==0 and h ==0: break


    count = 0
    world = []
    directions = [[1,-1],[1,0],[1,1],[0,-1],[0,1],[-1,-1],[-1,0],[-1,1]]

    # world 입력 
    for _ in range(h):
        array = list(map(int, input().split()))
        world.append(array)

    # 방문 여부 배열 초기화
    visited = [[False for _ in range(w)] for _ in range(h)]

    # 섬 탐색
    count = 0
    for height in range(h):
        for width in range(w):
            if not visited[height][width] and world[height][width] == 1:
                dfs(width, height)
                count += 1

    print(count)