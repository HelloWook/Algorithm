N = int(input())
M = int(input())

res = []
for num in range(N,M+1):
    for k in range(1,num+1):
        if k*k > num :
            break
        elif k*k == num:
            res.append(k*k)

if len(res)==0 :
    print(-1)
else :
    print(sum(res))     
    print(min(res))

