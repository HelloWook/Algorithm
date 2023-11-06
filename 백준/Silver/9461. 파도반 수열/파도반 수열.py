import sys 
input = sys.stdin.readline

triangle_list = [0] * 101
triangle_list[1] = 1
triangle_list[2] = 1
triangle_list[3] = 1
triangle_list[4] = 2
triangle_list[5] = 2
triangle_list[6] = 3
triangle_list[7] = 4
triangle_list[8] = 5
triangle_list[9] = 7
triangle_list[10] = 9

for i in range(11,101):
    triangle_list[i] = triangle_list[i-2] + triangle_list[i-3] 

number = int(input())
for i in range(number):
    a = int(input())
    print(triangle_list[a])
