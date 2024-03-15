import sys 
input = sys.stdin.readline
import queue

# 정점수, 간선수,시작 정점 입력받기 
vtx, edge , start = map(int, input().split())
vistied_list = [0]*(vtx+1)
edge_list = [[] for _ in range(vtx+1)]

cnt = 0 

# 관계 입력
for i in range(edge):
    rel, re2 = map(int, input().split())
    edge_list[rel].append(re2)
    edge_list[re2].append(rel)

# 관계 리스트 정렬 
for i in range(vtx+1):
        edge_list[i].sort()

# bfs 함수구현 
def bfs(vistied_list,start):
    bfs_queue = queue.Queue()
    bfs_queue.put(start)
    vistied_list[start] = 1
    global cnt
    cnt =2 
    while not bfs_queue.empty():      
        start = bfs_queue.get()
        for i in edge_list[start]:
            if vistied_list[i] == 0:
                bfs_queue.put(i)
                vistied_list[i] =cnt
                cnt += 1
        
bfs(vistied_list,start)

# 출력
for i in vistied_list[1::]:
    print(i)