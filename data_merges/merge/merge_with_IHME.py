import csv 
import pandas as pd
import pandas as pd



str = ',measure,country,sex,age,cause,metric,year,val,upper,lower,ISO'

def process_metadata(path):
    with open(path, 'r', encoding='utf-8') as csvfile:
        data = list(csv.DictReader(csvfile))
        return data

data = process_metadata('data_merges\IHME-GBD_2019_DATA-27a144e6-1_ISO3-ready.csv')

dict_of_d = {}
for row in data:
    if row['metric'] == 'Percent' and row['age'] == '5 to 19':
        if row['ISO'] not in dict_of_d.keys():
            dict_of_d[row['ISO']] = {int(row['year']):{row['cause'] : row['val']}}
        else: 
            if int(row['year']) in dict_of_d[row['ISO']].keys(): 
                dict_of_d[row['ISO']][int(row['year'])][row['cause']] = row['val']
            else: 
                dict_of_d[row['ISO']][int(row['year'])] = {row['cause'] : row['val']}

import json
with open('ihme_diseases_final.json', 'w') as fp:
    json.dump(dict_of_d, fp)
print(dict_of_d['IDN'])

