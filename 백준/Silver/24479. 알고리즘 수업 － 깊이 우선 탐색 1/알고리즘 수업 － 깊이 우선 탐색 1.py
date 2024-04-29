import sys
input = sys.stdin.readline
sys.setrecursionlimit(10 ** 6)

n1, n2, n3 = map(int, input().split())

visited_list = [0] * (n1 + 1)
line = [[] for _ in range(n1 + 1)]
cnt = 1

for i in range(n2):
    v, x = map(int, input().split())
    line[v].append(x)
    line[x].append(v) 
for i in range(n1 + 1):
    line[i].sort()

def dfs(vtx):
    global cnt
    visited_list[vtx] = cnt
    for i in line[vtx]:
        if visited_list[i] == 0:
            cnt += 1
            dfs(i)

dfs(n3)

for i in range(1, n1 + 1):
    print(visited_list[i])
