dic = []
n = int(input())

for i in range(n):
    a, b = input().split()
    a = int(a)
    t = (a, b)
    dic.append(t)

t = sorted(dic, key=lambda x: (x[0]))
for i in range(n):
    print(t[i][0], t[i][1])
