import csv
from typing import final 
import pandas as pd
from functools import reduce

import pandas as pd
import json

gdp = open('gdp-mortality-linearchart.json')
gdpdata = json.load(gdp)
newmrt = {}

for nation, nation_dict in gdpdata.items():
    for key in nation_dict:
        if 'value2' in key.keys():
            if nation in newmrt.keys():
                newmrt[nation].append(key)
            else:
                newmrt[nation] = []
                newmrt[nation].append(key)


for nation, nation_dict in newmrt.items():
    for key in nation_dict:
        key.pop('value', None)
        


print(newmrt)
with open('mortality-linearchart.json', 'w') as fp:
    json.dump(newmrt, fp)

