import sys
input = sys.stdin.readline

N, M  = map(int ,input().split())

trees = list(map(int, input().split()))

trees.sort()

start = 1 
end = trees[-1]
result = 0

while start <= end:
    mid = (start + end) //2
    sum = 0
    for i in trees:
        if i> mid :
            sum += i - mid 
    if sum>=M:
        result = mid
        start = mid +1
    elif sum == M:
         result =mid
         break     
    else :
        end = mid -1

print(result)
        





        
    
    


