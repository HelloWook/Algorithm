num = []
for i in range(0, 10):
    a = int(input())
    a %= 42
    num.append(a)

set = set(num)
print(len(set))
