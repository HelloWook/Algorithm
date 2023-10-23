import sys

input = sys.stdin.readline
# 선언
sum = 0
# 입력받기
N = int(input())
X = map(int, input().split())
# 리스트에 값 할당
person = [i for i in X]
# 정렬 
person.sort()
# 그리디 알고리즘 적용
for i in person:
    x = N * i
    sum += x
    N -= 1

print(sum)
