def narcissistic(value):
    int_as_str = [*str(value)]
    input_length = len(int_as_str)
    int_number = 0


    for number in int_as_str:
        print(number)
        int_number += int(number) ** input_length
        print(int_number)
    if value == int_number:
        return True
    else:
        return False


