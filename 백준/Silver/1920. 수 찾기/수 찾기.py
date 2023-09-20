# 값을 일력받는 부분
N = int(input())
A = list(map(int, input().split()))
A.sort()
M = int(input())
B = list(map(int, input().split()))


# 이진탐색을 구현하는 부분
def binary_search(start, end, target, array):
    mid = (start + end) // 2
    if start > end:
        print(0)
    else:
        if array[mid] > target:
            new_end = mid - 1
            binary_search(start, new_end, target, array)
        elif array[mid] < target:
            new_start = mid + 1
            binary_search(new_start, end, target, array)
        elif array[mid] == target:
            print(1)


# 정답을 구하는 코드
for i in range(M):
    binary_search(0, len(A) - 1, B[i], A)
