import sys
input = sys.stdin.readline
N = int(input())  
arr = list(map(int, input().split()))  
lis =  [arr[0]]


def binary_search(arr, target):
    left = 0
    right = len(arr)-1
    while left<=right:
        mid = (left+right)//2
        if arr[mid] < target:
            left = mid +1
        else :
            right = mid -1
    return left

for i in range(1,N):
    if arr[i] > lis[-1]:
       lis.append(arr[i])
    else :
        index = binary_search(lis, arr[i])
        lis[index] = arr[i]

print(len(lis))  