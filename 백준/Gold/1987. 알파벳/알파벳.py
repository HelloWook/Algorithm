import sys
input = sys.stdin.readline

R, C = map(int, input().split())
board = []

for i in range(R):
    value = input().strip() 
    board.append(list(value))

result = 0
visited = [False] * 26

dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

def dfs(x, y, cnt):
    global result 
    result = max(result, cnt)
    
    for i in range(4):
        kx = dx[i] + x
        ky = dy[i] + y
        if 0 <= kx < C and 0 <= ky < R:
            next_alpha = ord(board[ky][kx]) - ord('A')
            if not visited[next_alpha]:
                visited[next_alpha] = True
                dfs(kx, ky, cnt + 1)
                visited[next_alpha] = False


visited[ord(board[0][0]) - ord('A')] = True
dfs(0, 0, 1)
print(result)