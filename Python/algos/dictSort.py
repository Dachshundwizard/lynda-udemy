# Write a Python program to sort (ascending and descending) a dictionary by value.

d = {1: 2, 3: 4, 4: 3, 2: 1, 0: 0}
sorted_list = [x for x in d.items()]

sorted_list.sort(key=lambda x: x[0]) #sort by key
sorted_list.sort(key=lambda x: x[1]) #sort by value
print("Sorted by Value Ascending:",sorted_list)
sorted_list.reverse()
print("Sorted by Value Descending",sorted_list)
