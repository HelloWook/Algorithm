n, m =  map(int,input().split())

res =[]
visit = [False] * (n+1)

def dfs(x,ans):
    
    if x == m : 
        res.append(ans)
        return

    for i in range(1,n+1):
        if visit[i] == False:
            visit[i] = True
            dfs(x+1,ans+[i])
            visit[i] = False


        
dfs(0,[])    

for i in res:
    print(*i)

