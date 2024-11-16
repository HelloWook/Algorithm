n,m = map(int,input().split())

visit = [False] * (n+1)

res = []

def dfs(x,ans):
    if len(ans) == m:
        res.append(ans)
        return

    for i in range(x,n+1):
        if visit[i] == False:
            visit[i] = True
            dfs(i + 1,ans +[i])
            visit[i] =False
    
dfs(1,[])

for i in res:
    print(*i)

