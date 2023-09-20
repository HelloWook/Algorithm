num = int(input())
num_sum = []
num2 = input()
result = 0
for i in range(num):
    num_sum.append(int(num2[i]))
for i in range(num):
    result += num_sum[i]
print(result)
