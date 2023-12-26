N = int(input())
x = list(map(int,input().split()))
M = int(input())
x.sort()

start = 0   
end = max(x)

result =0

while start<=end:
    total = 0
    mid = (start + end) //2 
    for i in x:
        if i > mid:
            total += mid
        else:
            total += i
    if total<=M:
        result = mid
        start = mid+1
    else : 
        end = mid - 1
    
print(result)


