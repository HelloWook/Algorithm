import sys 
input = sys.stdin.readline
sys.setrecursionlimit(10**5)         

count = 0

T = int(input())

# 상하좌우 
dfx = [0, 0, -1, 1]
dfy = [-1, 1, 0, 0]

def dfs(x, y, M, N, vtx):
    if x < 0 or x == M or y < 0 or y == N:
        return
    
    if vtx[y][x] == 1:
        vtx[y][x] = 0
        for i in range(4):      
            nx = x + dfx[i]
            ny = y + dfy[i]
            dfs(nx, ny, M, N, vtx)

while count < T:
    M, N, K = map(int, input().split())
    vtx = [[0] * M for _ in range(N)]
    count_earthworm = 0  
    for i in range(K):
        a, b = map(int, input().split())
        vtx[b][a] = 1
    for i in range(N):
        for j in range(M):
            if vtx[i][j] == 1:
                count_earthworm += 1
                dfs(j, i, M, N, vtx)  
    print(count_earthworm)
    count += 1
