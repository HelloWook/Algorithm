n, m = map(int,input().split())

res = []

def dfs(x,array):
    if len(array) == m :
        res.append(array)
        return


    for i in range(1,n+1):
        dfs(x+1,array + [i])

dfs(1,[])    

for i in res:
    print(*i)