import sys 
input = sys.stdin.readline

x = int(input())


def calc (N,M,x,y):
    K = x
    while K <=M*N:
        if(K-x) %  N == 0 and (K-y)% M ==0:
            print(K)
            return
        K+=N
    print(-1)
    return

for i in range(x):
    M,N,x,y = map(int,input().split())
    calc(M,N,x,y)

