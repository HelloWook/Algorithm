alpha = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

str = input()
count = 0

for i in alpha:
    while i in str:  # 크로아티아 알파벳이 남아있는 동안 반복
        str = str.replace(i, " ", 1)  # 한 번에 하나씩만 대체
        count += 1  # 크로아티아 알파벳 개수 증가

# 남은 일반 문자 개수를 더함
count += len(str.replace(" ", ""))

print(count)
