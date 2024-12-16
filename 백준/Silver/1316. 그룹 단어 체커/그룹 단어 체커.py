import sys

input = sys.stdin.readline

number = int(input())
wordLlist = []
count = 0

for i in range(number):
    word = input().strip()
    wordLlist.append(word)


for i in range(0,number):
    check = []
    word = wordLlist[i]
    result = ""
    init = word[0]

    for j in range(0,len(word)):
        if init == word[j]:
            if word[j] not in check:
                result += word[j] 
        else : 
            check.append(init)
            init = word[j]
            if word[j] not in check:
                result += word[j]
    if word == result :
        count+=1

print(count)