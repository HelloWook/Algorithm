S = input().rstrip()
T = input().rstrip()
def Check(S,T):
    while True:
        if len(T) == len(S):
            if S == T:
                print(1)
                break
            else :
                print(0)
                break
        else : 
            if T[-1] == 'A':
                T = T[:-1]
            else :
                T = T[:-1][::-1] 
Check(S,T)