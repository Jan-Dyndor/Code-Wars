# You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

# Array can contain numbers or strings. X can be either.

# Return true if the array contains the value, false if not.


def check(a, x):
    if x in a:
        return True
    else:
        return False


arr = [8, 7, 5, "bored", "of", "writing", "tests", 115]
print(check(arr, 45))


# def check(seq, elem):
#     return elem in seq
