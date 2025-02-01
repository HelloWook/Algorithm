n = int(input())

operands = list(map(int,input().split()))

operators = list( map(int,input().split()))

mx = float('-inf') 
mn = float('inf')  


def backTrack(count,res,operators):
    global mx, mn

    if count == n:
        mx = max(mx,res)
        mn = min(mn,res)
        return
    for i in range(4):
        if operators[i] > 0:
            newOperator = operators[:]
            newOperator[i] -=1
            if i == 0:
                backTrack(count+1,res+operands[count],newOperator) 
            elif i ==1:
                backTrack(count+1,res-operands[count],newOperator) 
            elif i ==2:
                backTrack(count+1,res*operands[count],newOperator) 
            else:    
                backTrack(count+1,int(res/operands[count]),newOperator) 

backTrack(1,operands[0],operators)
print(mx)
print(mn)