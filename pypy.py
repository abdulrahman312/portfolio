str = 'Core Python'

n = len(str)
i = 0
while i<n:
    print(str[i], end='e')
    i += 1

print()

i = 1
while i <= n:
    print(str[-i], end='')
    i += 1