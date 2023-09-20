num = input().lower()
max = 0
num2 = set(num)
for i in num2:
    if max == num.count(i):
        max = num.count(i)
        bigges_alph = "?"
        continue
    if max <= num.count(i):
        max = num.count(i)
        bigges_alph = i

print(bigges_alph.upper())
