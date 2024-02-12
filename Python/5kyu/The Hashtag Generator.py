# The marketing team is spending way too much time typing in hashtags.
# Let's help them with our own Hashtag Generator!
#
# Here's the deal:
#
# It must start with a hashtag (#).
# All words must have their first letter capitalized.
# If the final result is longer than 140 chars it must return false.
# If the input or the result is an empty string it must return false.
# Examples
# " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
# "    Hello     World   "                  =>  "#HelloWorld"
# ""                                        =>  false

def generate_hashtag(s):
    if len(s) == 0:
        return False
    else:
        words = s.split(" ")
        words_capitalized = [word.capitalize() for word in words]
        words_capitalized.insert(0, "#")
        generator = "".join(words_capitalized)
        if len(generator) > 140 :
            return False
        else:
            return generator

generate_hashtag(("  Hello    word"))