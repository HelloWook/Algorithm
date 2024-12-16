import sys
input = sys.stdin.readline

N = int(input().strip())
cards = list(map(int,input().split()))
M  =  int(input().strip())
checkCards = list(map(int,input().split()))
result = []


cardDic = {}

for i in cards:
    cardDic[i] = 0

for j in checkCards:
    if j not in cardDic :
        cardDic[j] = 0
    else :
        cardDic[j] +=1

for k in checkCards:
    print(cardDic[k], end=" ")