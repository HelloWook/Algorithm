N, K = map(int, input().split())
result = 1
result2 = 1
result3 = 1
for i in range(1, N + 1):
    result *= i
for i in range(1, K + 1):
    result2 *= i
for i in range(1, N - K + 1):
    result3 *= i

print(result // (result2 * result3))
