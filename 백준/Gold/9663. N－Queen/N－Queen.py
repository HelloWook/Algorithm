n = int(input())
ans = 0
row = [0] * n

def is_safe(x, col):
    for i in range(x):
        if row[i] == col or \
           abs(row[i] - col) == abs(i - x):
            return False
    return True

def solve(x):
    global ans
    if x == n:
        ans += 1
        return
    
    # 현재 행의 각 열에 퀸을 놓아보기
    for col in range(n):
        if is_safe(x, col):
            row[x] = col
            solve(x + 1)

solve(0)
print(ans)