n = int(input())
students = []

for _ in range(n):
    name = input()
    grade = float(input())
    students.append([name, grade])

grades = sorted(set([g for _, g in students]))
second = grades[1]

names = sorted([name for name, g in students if g == second])

for name in names:
    print(name)