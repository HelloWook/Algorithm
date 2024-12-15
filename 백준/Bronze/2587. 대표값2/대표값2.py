import sys 

input = sys.stdin.readline

scores = []

for i in range(5):
    score = int(input()) 
    scores.append(score)

scores.sort()

print(sum(scores)//5)
print(scores[2])
