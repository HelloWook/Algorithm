n, m = map(int, input().split())
minimun_num = 0
for i in range(1, n + 1):
    if n % i == 0 and m % i == 0:
        minimun_num = i
max_num = m * n // minimun_num
print(minimun_num)
print(max_num)
