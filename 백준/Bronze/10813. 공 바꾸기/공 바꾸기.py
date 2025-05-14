N,M = map(int,input().split())

bucket = [_ for _ in range(N+1)]



def swap(a,b):
    c = bucket[b] 
    bucket[b] = bucket[a]
    bucket[a] = c

for i in range(M):
    i, j = map(int,input().split())
    
    swap(i,j)


print(*bucket[1:])