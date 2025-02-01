n , m=  map(int,input().split())

res = []

def backTracking(count,array):
    if count==m : 
        print(' '.join(map(str, array)))
        return
    
    for i in range(1, n+1):
        if   len(array) ==0 or array[-1] <= i:
           backTracking(count+1, array + [i])

backTracking(0,[])

