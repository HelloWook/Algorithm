from collections import deque

num = int(input())

board = []
visited = [[False]  * num for _ in range(num)] 


for i in range(num):
    array = list(map(int,input().split()))
    board.append(array)

def bfs():
    queue = deque([[0,0]])

    while queue :
        x,y = queue.popleft()   
        count = board[y][x]
        visited[y][x] = True
        
        for i in  [[count,0],[0,count]]:
            dx = x + i[0]
            dy = y + i[1]
            if 0<=dx<num and 0<=dy<num :
                if visited[dy][dx] == False:
                    queue.append([dx,dy])
                

bfs()

print("HaruHaru" if visited[num-1][num-1] else "Hing")
