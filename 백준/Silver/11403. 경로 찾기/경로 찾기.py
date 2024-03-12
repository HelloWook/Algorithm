import sys 
sys.setrecursionlimit(10**6)

input = sys.stdin.readline

N= int(input())

graph = [list(map(int,input().rstrip().split())) for _ in range(N)]  


for i in range(N):
    for j in range(N):
        for k in range(N):
            if graph[j][i] and graph[i][k]:
                graph[j][k] =1

for i in graph:
    print(*i)


