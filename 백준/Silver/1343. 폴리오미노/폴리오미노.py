board = input()
i = 0
result = ""

while i < len(board):

    if board[i] == '.':
        result += '.'
        i += 1

    elif board[i] == 'X':

        x_count = 0
        while i < len(board) and board[i] == 'X':
            x_count += 1
            i += 1
        
        if x_count % 2 != 0:
            result = "-1"
            break
        
        
        while x_count >= 4:
            result += "AAAA"
            x_count -= 4
        
        
        while x_count >= 2:
            result += "BB"
            x_count -= 2
    else:
        
        result = "-1"
        break

print(result)