for i in range(10):
    num = int(input())
    apts = list(map(int,input().split()))
    result = 0
    
    for x in range(2,len(apts)-2):
        apt_height = apts[x]
        # 양옆 2개 포함 가장 큰 길이 인지 확인 
        tallest_apt_heigth = max(apts[x-1],apts[x-2],apts[x],apts[x+1],apts[x+2])
        # 가장 큰 아파트 일 떄 
        if tallest_apt_heigth == apt_height: 
            second_tallest_apt_heigth = max(apts[x-1],apts[x-2],apts[x+1],apts[x+2])
            result += apt_height - second_tallest_apt_heigth
    print(f'#{i+1} {result}')






                