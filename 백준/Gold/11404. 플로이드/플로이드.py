import sys 
input = sys.stdin.readline

INF = int(1e9)
# 점선의 갯수 
edge = int(input())

# 관계의 갯수 
connection = int(input())

# 점선의 가중치를를 저장할 리스트 
edgeWeight = [[INF for i in range(edge)] for _ in range(edge)]

# 리스트에 관계간의 가중치를 저장 
for i in range(connection):
    a,b,c = map(int, input().split())
    edgeWeight[a-1][b-1] = min(c, edgeWeight [a-1][b-1]) 

# 자가자신을 가르키는 수 0으로 만들기 
for i in range(edge):
    for j in range(edge):
        if i == j:
            edgeWeight[i][j] =0

# 플로이드 위셜 알고리즘 
for i in range(edge):
    for a in range(edge):
        for b in range(edge):
            edgeWeight[a][b] = min(edgeWeight[a][b], edgeWeight[a][i]+edgeWeight[i][b]) 

# 출력
for i in range(edge):
    for j in range(edge):
        if edgeWeight[i][j] == INF:
           print(0,end=" ")
        else :
            print(edgeWeight[i][j] ,end =" ") 
    print()