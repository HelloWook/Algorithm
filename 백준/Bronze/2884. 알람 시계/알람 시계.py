num, num2 = map(int, input().split())
num3 = num * 60 + num2

result = num3 - 45

hour = result // 60
min = result % 60

if num == 0 and num2 < 45:
    hour = 23
    min = num2 + 60 - 45


print(hour, min)
