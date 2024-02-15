# Convert number to reversed array of digits
# Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
#
# Example(Input => Output):
# 35231 => [1,3,2,5,3]
# 0 => [0]

def digitize(n):
    z = str(n)
    z_reversed = z[::-1]
    z_reversed_array = [int(number) for number in z_reversed]
    return z_reversed_array