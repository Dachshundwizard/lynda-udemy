from random import choice

class coin:

    def __init__(self, heads, rare, clean, **kwargs):
        self.coin_name = "coin"
        for key,value in kwargs.items():
            setattr(self, key, value)

        self.heads = heads
        self.rare = rare
        self.clean = clean

        if self.rare:
            self.coin_value*=self.value_multiplier

        if self.clean:
            self.color = self.original_color
        else:
            self.color = self.rusty_color


    def __del__(self):
        print("Coin spent.")

    def __str__(self):
        return self.coin_name

    def flip(self):
        head_options = ["Heads", "Tails"]
        self.heads = choice(head_options)

    def rust(self):
        if self.color == self.original_color:
            self.color = self.rusty_color

    def clean(self):
        if self.color == self.rusty_color:
            self.color = self.original_color


class dime(coin):
    def __init__(self, heads = True, rare = False, clean = True):
        dime_specs = {
            "coin_value": .1,
            "num_edges": 118,
            "diameter": .705,
            "thickness": .053,
            "original_color": "silver",
            "rusty_color": None,
            "value_multiplier": 1.25,
            "mass":2.268,
            "coin_name": "dime"
        }
        super().__init__(heads, rare, clean, **dime_specs)

    def rust(self):
        self.color = self.original_color

class penny(coin):
    def __init__(self, heads = True, rare = False, clean = True):
        penny_specs = {
            "coin_value": .01,
            "num_edges": 1,
            "diameter": .75,
            "thickness": .0598,
            "original_color": "copper",
            "rusty_color": "greenish",
            "value_multiplier": 1.25,
            "mass": 2.5,
            "coin_name": "penny"
        }
        super().__init__(heads, rare, clean, **penny_specs)

class quarter(coin):
    def __init__(self, heads = True, rare = False, clean = True):
        quarter_specs = {
            "coin_value": .25,
            "num_edges": 119,
            "diameter": .955,
            "thickness": .069,
            "original_color": "silver",
            "rusty_color": None,
            "value_multiplier": 1.25,
            "mass": 5.67,
            "coin_name": "quarter"
        }
        super().__init__(heads, rare, clean, **quarter_specs)

    def rust(self):
        self.color = self.original_color

class sac_dollar(coin):
    def __init__(self, heads = True, rare = False, clean = True):
        sac_dollar_specs = {
            "coin_value": 1,
            "num_edges": 1,
            "diameter": 1.043,
            "thickness": .079,
            "original_color": "gold",
            "rusty_color": "brownish",
            "value_multiplier": 1.25,
            "mass": 8.1,
            "coin_name": "Sacagawea dollar"
        }
        super().__init__(heads, rare, clean, **sac_dollar_specs)


class nickel(coin):
    def __init__(self, heads = True, rare = False, clean = True):
        nickel_specs = {
            "coin_value": .05,
            "num_edges": 1,
            "diameter": .835,
            "thickness": .077,
            "original_color": "silver",
            "rusty_color": None,
            "value_multiplier": 1.25,
            "mass": 5,
            "coin_name": "nickel"
        }
        super().__init__(heads, rare, clean, **nickel_specs)

    def rust(self):
        self.color = self.original_color

coins = [penny(), nickel(), dime(), quarter(), sac_dollar()]

for coin in coins:
    specs = [coin, coin.color, coin.coin_value, coin.num_edges, coin.diameter, coin.thickness, coin.mass]

    string = "{} | Color: {} | Value: {} | Edges: {} | Diameter: {} | Thickness: {} | Mass: {}".format(*specs)
    print(string)
