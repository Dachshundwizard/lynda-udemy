my_var = "hello"
grades = [55,77,66,79,94,95,93,58,68]
tuple_grades = (55,77,66,79,94,95,93,58,68)
set_grades = {55,77,66,79,94,95,93,58,68}

# Only difference between a list and a tuple is that the tuple is immutable.
# Cannot increase the size of the Tuple
# Sets are unique and unordered

# -> Lists are the most flexible
# Yoo would want to use a tuple if you don't need to change anything

print(len(grades))
print(sum(grades) / len(grades))

grades.append(100)
