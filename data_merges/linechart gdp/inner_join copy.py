import csv
from typing import final 
import pandas as pd
from functools import reduce

import pandas as pd
import json

gdp = open('ngdp.json')
mrt = open('graph-from-mortality.json')
gdpdata = json.load(gdp)
mrtdata = json.load(mrt)

for year, year_dict in mrtdata.items():
    for nation in year_dict:
        if nation['name'] in gdpdata.keys():
            for v in gdpdata[nation['name']]:
                if v['date'] == year: 
                    v['value2'] = nation['value']


with open('gdp-mortality-linearchart.json', 'w') as fp:
    json.dump(gdpdata, fp)


