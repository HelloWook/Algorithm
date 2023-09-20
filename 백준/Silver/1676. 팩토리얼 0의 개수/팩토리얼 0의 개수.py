def count_zeros_in_factorial(n):
    count = 0
    while n >= 5:
        count += n // 5
        n //= 5
    return count


N = int(input())

print(count_zeros_in_factorial(N))
