import sys

input_function = sys.stdin.readline
sys.setrecursionlimit(10**6)
INF = int(1e9)

A, B = map(int, input_function().split())

# 유저 리스트
users = [_ for _ in range(1, A+1)]
# 관계 리스트
connections = [[0 for _ in range(A)] for _ in range(A)]
# 관계의 케빈 베이컨 수를 저장할 리스트
graph = [[INF] * A for _ in range(A)]

# 관계를 입력받는 모듈
for _ in range(B):
    con1, con2 = map(int, input_function().split())
    connections[con1-1][con2-1] = 1
    connections[con2-1][con1-1] = 1

# 그래프 가중치 구하기
for i in range(A):
    for j in range(A):
        if i == j:
            graph[i][j] = 0
        elif connections[i][j]:
            graph[i][j] = 1

# 케빈 베이컨수를 찾는 모듈
for k in range(A):
    for i in range(A):
        for j in range(A):
            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

# 답변을 구하는 수
bacon = INF
answer = 0
for i in range(A):
    s = sum(graph[i][:]) 
    if bacon > s:
        bacon = s
        answer = i

print(answer + 1)
