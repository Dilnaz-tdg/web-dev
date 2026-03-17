x = int(input())
d = int(input())

count = 0
for c in str(x):
    if int(c) == d:
        count += 1

print(count)