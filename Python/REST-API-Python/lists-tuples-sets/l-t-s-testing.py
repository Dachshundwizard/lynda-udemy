my_var = "hello"
list_grades = [77, 80, 90, 88, 87, 92, 67, 68, 72, 85, 92, 99, 92, 59, 65, 88]
tuple_grades = (77, 80, 90, 88, 87, 92, 67, 68, 72, 85, 92, 99, 92, 59, 65, 88)
set_grades = {77, 80, 90, 88, 87, 92, 67, 68, 72, 85, 92, 99, 92, 59, 65, 88}

print(list_grades[1])
print(list_grades)

set_grades.add(600)
print(set_grades)

your_numbers = {3,4,5,22,1,6,7}
lottery_numbers = {4,6,3,2,7,8,9}

print(your_numbers.intersection(lottery_numbers))
print(your_numbers.union(lottery_numbers))
