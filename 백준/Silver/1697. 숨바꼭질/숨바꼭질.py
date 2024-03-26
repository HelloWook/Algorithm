import sys
from collections import deque
input = sys.stdin.readline

# 입력부 
N,K = map(int, input().strip().split())
distance = [0] * (100001)


#bfs 구현부 
q = deque()
q.append(N)
while q:
    num = q.popleft()
    if num == K:
            print(distance[num])
            break
    else : 
          for i in (num-1,num+1,num*2):
                if 0<= i <=100000 and not distance[i]:
                    distance[i] = distance[num] +1
                    q.append(i)
                

