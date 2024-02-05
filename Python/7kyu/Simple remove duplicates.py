#Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

# Example:
# For input: [3, 4, 4, 3, 6, 3]

# remove the 3 at index 0
# remove the 4 at index 1
# remove the 3 at index 3
# Expected output: [4, 6, 3]

# More examples can be found in the test cases.

# ood luck!


def solve(arr):

    for x in range(0, len(arr)):
        for number in arr:
            if arr.count(number) > 1:
                n_index = arr.index(number)
                arr.pop(n_index)

    print(arr)
    return arr

solve([1,2,1,2,1,2,3])

# Solution above is not perfect in case of optimalization.



# Best solution in my opinion is that! Amazing done!
# return list(dict.fromkeys(arr[::-1]))[::-1]
