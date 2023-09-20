dic = []
n = int(input())

for i in range(n):
    a, b = input().split()
    a = int(a)
    b = int(b)
    t = (a, b)
    dic.append(t)

t = sorted(dic)
for i in range(n):
    print(t[i][0], t[i][1])
