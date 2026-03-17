from collections import Counter

s = input()
c = Counter(s)

for ch, cnt in sorted(c.items(), key=lambda x: (-x[1], x[0]))[:3]:
    print(ch, cnt)