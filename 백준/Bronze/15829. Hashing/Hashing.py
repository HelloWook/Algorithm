n = int(input())
m = input()
m_list = []
result = 0
for i in range(len(m)):
    m_list.append(ord(m[i]) - 96)
for i in range(n):
    result += m_list[i] * 31**i

print(result)
