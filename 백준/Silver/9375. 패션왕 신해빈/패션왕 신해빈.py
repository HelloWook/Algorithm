import sys

input = sys.stdin.readline

n = int(input())

for _ in range(n):
    cloth_dic = {}
    count = 1
    n1 = int(input())
    
    for i in range(n1):
        a, b = sys.stdin.readline().split()
        if b in cloth_dic:
            cloth_dic[b].append(a)
        else:
            cloth_dic[b] = [a]
    
    for i in cloth_dic:
        count *= len(cloth_dic[i]) + 1  
    
    print(count - 1)  
