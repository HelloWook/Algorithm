candidate, winner = map(int,input().split())


scores = list(map(int,input().split()))
scores.sort(reverse=True)

print(scores[winner-1])

    