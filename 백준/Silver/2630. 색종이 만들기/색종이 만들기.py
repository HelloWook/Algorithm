import sys 
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

# 입력 받는 부분 
N = int(input())
Graph = [list(map(int,input().strip().split()))for _ in range(N)]

# 카운팅을 위한 함수 모음 
withe_color = 0
blue_color = 0

# 재귀를 진행할 함수 
def cut_paper(x,y,n):
    global withe_color
    global blue_color    
    color = Graph[x][y]
    for i in range(x,x+n):
        for j in range(y,y+n):
            if color != Graph[i][j]:
                cut = n//2
                cut_paper(x,y,cut)
                cut_paper(x+cut,y,cut)
                cut_paper(x,y+cut,cut)
                cut_paper(x+cut,y+cut,cut)
                return
    if color ==1:
        blue_color+=1
    else :
        withe_color+=1
cut_paper(0,0,N)

# 출력부 
print(withe_color)
print(blue_color)

