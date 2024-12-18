
n = int(input())

array = []

board = [[0] * 100 for _ in range(100)]


for i in range(n):
    num = list(map(int, input().split()))
    array.append(num)


for j in range(0,len(array)):
    pos = array[j]
    posX = pos[0]
    posY = pos[1]
    for x in range(posX, posX+10):
        for y in range(posY, posY+10):
            if 0 <= x < 100 and 0 <= y < 100:
                board[x][y] =1



filled_area = sum(row.count(1) for row in board)
print(filled_area)