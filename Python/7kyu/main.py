# Write a simple parser that will parse and run Deadfish.
#
# Deadfish has 4 commands, each 1 character long:
#
# i increments the value (initially 0)
# d decrements the value
# s squares the value
# o outputs the value into the return array
# Invalid characters should be ignored.

def parse(data):
    valid_comands = ["i", "d", "s", "o"]
    input = [*data]
    result = []
    user_commands = []
    number = 0

    print(input)
    for letter in input:
        if letter in valid_comands:
            user_commands.append(letter)

    for command in user_commands:
        if command == "i":
            number += 1
        elif command == "d":
            number -= 1
        elif command == "s":
            number *= number
        elif command == "o":
            result.append(number)
    print(result)
    return result

parse("ooo")