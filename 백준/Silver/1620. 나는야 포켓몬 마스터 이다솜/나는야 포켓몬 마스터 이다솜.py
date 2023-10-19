import sys

input = sys.stdin.readline

N1, N2 = map(int, input().split())
pokemon = {}
for i in range(1, N1 + 1):
    mon = input().strip()
    pokemon[i] = mon
    pokemon[mon] = i

for i in range(N2):
    pika = input().strip()
    if pika.isdigit():
        print(pokemon[int(pika)])
    else:
        print(pokemon[pika])
