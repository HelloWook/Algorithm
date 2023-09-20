num1 = int(input())
num2 = int(input())
num3 = int(input())

x_num = list(str(num1 * num2 * num3))

answer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for num in x_num:
    answer[int(num)] += 1
    
for ans in answer:
    print(ans)