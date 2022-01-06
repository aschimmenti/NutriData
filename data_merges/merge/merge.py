import csv 
import pandas as pd
from functools import reduce

import pandas as pd


#df = pd.read_csv("mortality_rate_5-14.csv", sep=";")
#df.drop(df.index[df['Uncertainty.Bounds*'] == 'Lower'], inplace=True)
#df.drop(df.index[df['Uncertainty.Bounds*'] == 'Upper'], inplace=True)
#df.to_csv('mortality_rate_median.csv')
#print(df)

def process_metadata(path):
    with open(path, 'r', encoding='utf-8') as csvfile:
        data = list(csv.DictReader(csvfile))
        return data

df1 = process_metadata('malnutrition-estimates.csv')

new_dict = {}
for row in df1: 
    if row['ISOcode'] not in new_dict.keys():
        new_dict[row['ISOcode']] = [[row['year'], row['Severe Wasting'],row['Wasting'],row['Overweight'],row['Stunting'],row['Underweight']]]
    else: 
        new_dict[row['ISOcode']].append([row['year'], row['Severe Wasting'],row['Wasting'],row['Overweight'],row['Stunting'],row['Underweight']])

print(new_dict)

list_of_years = []
for k, v in new_dict.items():
    for l in v: 
        if int(l[0]) not in list_of_years:
            list_of_years.append((int(l[0])))
list_of_years.sort()
print(list_of_years)    

list_of_countries = []
for k, v in new_dict.items():
   if k not in list_of_countries:
            list_of_countries.append(k)
list_of_countries.sort()
print(len(list_of_countries))    


final_dict = {}

for l in list_of_countries:
    final_dict[l] = {}
    for y in list_of_years:
        if y not in final_dict[l].values():
            final_dict[l][y] = ''

for row in df1:
    final_dict[row['ISOcode']][int(row['year'])] = {'Severe Wasting' : row['Severe Wasting'], 'Wasting' : row['Wasting'], 'Overweight' : row['Overweight'], 'Stunting' : row['Stunting'], 'Underweight' :row['Underweight']}

for k, v in final_dict.items():
    print(k, v)
