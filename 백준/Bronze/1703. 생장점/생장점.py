

while True:
    input_value = list(map(int,input().split()))

    if input_value[0] == 0 :
        break
    k = 1
    leaf_count_idx = 1
    cut_leaf_count_idx = 2

    for time in range(input_value[0]):
        leaf_count = input_value[leaf_count_idx]
        cut_leaf_count= input_value[cut_leaf_count_idx]

        k = k * leaf_count - cut_leaf_count

        leaf_count_idx += 2
        cut_leaf_count_idx +=2
    print(k)

