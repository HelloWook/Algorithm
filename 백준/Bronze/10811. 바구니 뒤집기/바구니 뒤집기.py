N,M = map(int,input().split())

bucket = [_ for _ in range(N+1)]
length = -len(bucket)

for m in range(M):
    start, end = map(int,input().split())
    rev_end = length + start -1
    rev_start = length + end
    idx = 0

    reversed_bucket = bucket[rev_start:rev_end:-1]

    
    for pos in range(start,end+1):
        bucket[pos] = reversed_bucket[idx]
        idx+=1
    

    
        
        
print(*bucket[1:])