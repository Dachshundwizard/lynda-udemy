import random

class Dollar:
    def __init__(self, rare=False):

        self.rare = rare

        if self.rare:
            self.value = self.value*3
        else:
            self.value = 1.00
    
        self.color = "gold"
        self.num_edges = 1
        self.thickness = 3.15 #mm
        self.heads = True

    def __del__(self):
        print("Coin Spent!")

    def rust(self):
        self.color = "greenish"

    def clean(self):
        self.color = "gold"

    def flip(self):
        flip_options = [True,False]
        choice = random.choice(flip_options)
        self.heads = choice

        

        

        



    
