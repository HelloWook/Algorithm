A, B = map(int, input().split())
sosu_list = []


for i in range(A, B + 1):
    if i == 1:
        continue
    for j in range(2, int(i**0.5)+1):
        if i % j == 0:  # 너 소수아님
            break
    else:
        print(i)
