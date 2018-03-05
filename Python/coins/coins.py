import random

class Coin:
    def __init__(self, rare=False, clean=True, heads = True, **kwargs): # This is the constructor function, and it is saying that by default, it is not rare and is clean
        for key, value in kwargs.items():                               # It will loop through each item and setattr
            setattr(self,key,value)                                     # This will set up all of the states from the dict for us

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
        choice = random.choidce(heads_options)
        self.heads = choice


class Quarter(Coin): # We are creating a class called "Quarter" and it is inheriting from its parent Coin class
    def __init__(self): # We are passing all of this information to the parent class init function
         data = {
         "original_value":0.25,
         "clean_color":"silver",
         "rusty_color":"brown-greenish", # All of this is going to be packed into Kwargs, and we also use 'super' class init function
         "diameter":.955,
         "num_edges":1,
         "thickness":1.2,
         "weight":2.5
         }
    super().__init__(**data) # We've taken this dictionary, packed it down into data, and then pass it into the __init__ function as "Kwargs" (keyword arguments)
