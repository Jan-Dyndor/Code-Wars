# Given an array of integers, return a new array with each value doubled.

# For example:


# [1, 2, 3] --> [2, 4, 6]
def maps(a):
    b = list()
    for number in a:
        number = number * 2
        b.append(number)
    return b


# def maps(a):
#     return [2 * x for x in a]

r = [1, 2, 3]
print(maps(r))
