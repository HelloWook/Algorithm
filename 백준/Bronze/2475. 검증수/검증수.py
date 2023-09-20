number = list(map(int, input().split()))
number2 = []
sum = 0
for i in number:
    number2.append(i * i)

for i in number2:
    sum += i

print(sum % 10)
