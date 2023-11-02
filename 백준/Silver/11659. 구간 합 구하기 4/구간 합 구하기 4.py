import sys 
input = sys.stdin.readline

a, b = map(int, input().split())

sum_list = [0]*(a+1)

list_array = input().split()
list_array = list(map(int,list_array))

for i in range(1,a+1):
    sum_list[i] = sum_list[i-1] + list_array[i-1]

for i in range(b):
    num1, num2 = map(int,input().split())
    print(sum_list[num2]-sum_list[num1-1])

    