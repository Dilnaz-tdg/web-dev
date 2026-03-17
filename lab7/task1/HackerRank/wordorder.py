n = int(input())
words = []
count = {}

for _ in range(n):
    w = input()
    if w not in count:
        words.append(w)
        count[w] = 1
    else:
        count[w] += 1

print(len(words))
print(*[count[w] for w in words])