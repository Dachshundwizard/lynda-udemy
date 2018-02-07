import random

class Coin:                                     # General class that will work for every other class to inherit from
    def __init__(self, rare=False, clean=True, heads = True, **kwargs): # This is the constructor function, and it is saying that by default, it is not rare and is clean
    self.is_rare = rare
    self.is_clean = clean
    self.heads = heads

    if self.is_rare:
        self.value = self.original_value * 1.25
    else:
        self.value = self.original_value

    if self.is_clean:
        self.color = self.clean_color
    else:
        self.color = self.rusty

    def rust(self):
        self.color = self.rusty_color # if the rust method is invoked, then it will become the "rusty_color" of that "self" Coin

    def clean(self):
        self.color = self.clean_color

    def __del__(self):
        print("Coin spent!")

    def flip(self):
        heads_options = [True,False] # this is a Python List
        choice = random.choice(heads_options)
        self.heads = choice

class Quarter(Coin): # We are creating a class called "Quarter" and it is inheriting from its parent Coin class
     def __init__(self):
         data = {
         "original_value":0.25,
         "clean_color":"silver",
         "rusty_color":"brown-greenish",
         "diameter":.955,
         "num_edges":1,
         "thickness":1.2,
         "weight":2.5
         }
    super().__init__(**data) # We've taken this dictionary, packed it down into data, and then pass it into the __init__ function as "Kwargs" (keyword arguments)
