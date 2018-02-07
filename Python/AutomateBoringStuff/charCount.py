import pprint
message = 'I love dogs so much it hurts!'
count = {}

for character in message.upper():
    count.setdefault(character, 0)
    count[character] = count[character] + 1
pprint.pprint(count)
