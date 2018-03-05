def anagram(str1, str2):

    str1 = str1.replace(' ', '').lower() # Reassigning the strings to have lower-case and no white space
    str2 = str1.replace(' ', '').lower()

    return sorted(str1) == sorted(str2)


print (anagram('dog', 'poop'))
