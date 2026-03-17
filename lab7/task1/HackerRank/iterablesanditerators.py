from itertools import combinations

n = int(input())
arr = input().split()
k = int(input())

idx = [i for i, v in enumerate(arr) if v == 'a']
all_c = list(combinations(range(n), k))

good = 0
for c in all_c:
    if any(i in c for i in idx):
        good += 1

print(good / len(all_c))