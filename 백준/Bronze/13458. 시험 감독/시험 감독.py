N = int(input())

A = list(map(int,input().split()))

B,C = map(int,input().split())

count = len(A)

for a in range(len(A)):
    A[a] -= B 
    if A[a] > 0 :
        pes = A[a] //C
        na_pes = A[a] % C
        count+=pes
        if na_pes > 0:
            count+=1
 
print(count)