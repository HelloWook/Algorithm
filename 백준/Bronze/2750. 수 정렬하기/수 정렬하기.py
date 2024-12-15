numbersCount = int(input())

numbers = []

for i in range(numbersCount):
    number = int(input())
    numbers.append(number)

numbers.sort()

for j in numbers:
    print(j)