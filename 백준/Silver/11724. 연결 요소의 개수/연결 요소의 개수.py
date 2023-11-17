n, m =map(int,input().split())

visit_list = [0]*(n+1)
grpah_list = [[] for _ in range(n + 1)]

count = 0
def dfs(x):
    visit_list[x]=1
    for i in grpah_list[x]:
        if visit_list[i]==0:
            dfs(i)
        

for _ in range(m):
    a,b = map(int,input().split())
    grpah_list[a].append(b)
    grpah_list[b].append(a)


for i in range(1,n+1):
    if visit_list[i] ==0:
        if grpah_list[i]==0:
            count+=1
            visit_list[i] = 1
        else : 
            dfs(i)
            count+=1

print(count)