import csv
from typing import final 
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

df1 = process_metadata('data\malnutrition-estimates.csv')

new_dict = {}
for row in df1: 
    if row['ISOcode'] not in new_dict.keys():
        new_dict[row['ISOcode']] = [[row['year'], row['Severe Wasting'],row['Wasting'],row['Overweight'],row['Stunting'],row['Underweight']]]
    else: 
        new_dict[row['ISOcode']].append([row['year'], row['Severe Wasting'],row['Wasting'],row['Overweight'],row['Stunting'],row['Underweight']])


list_of_years = []
for k, v in new_dict.items():
    for l in v: 
        if int(l[0]) not in list_of_years:
            list_of_years.append((int(l[0])))
list_of_years.sort()

list_of_countries = []
for k, v in new_dict.items():
   if k not in list_of_countries:
            list_of_countries.append(k)
list_of_countries.sort()


final_dict = {}

for l in list_of_countries:
    final_dict[l] = {}
    for y in list_of_years:
        if y not in final_dict[l].values():
            final_dict[l][y] = ''

for row in df1:
    final_dict[row['ISOcode']][str(int(row['year']))] = {'Severe Wasting' : row['Severe Wasting'], 'Wasting' : row['Wasting'], 'Overweight' : row['Overweight'], 'Stunting' : row['Stunting'], 'Underweight' :row['Underweight']}


df2 = process_metadata('data/mortality_rate_median.csv')
years_m = ['1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019']
dict2 = {}
for row in df2:
    for k in row.keys():
        if k in years_m:
            if row['ISOCode'] not in dict2.keys():
                dict2[row['ISOCode']] = {}
                dict2[row['ISOCode']][str(k)] = {'MortalityR':row[k]}
            else:
                dict2[row['ISOCode']][str(k)] = {'MortalityR':row[k]}


for key in final_dict:
    for key2 in dict2: 
        if key == key2: 
            for y in years_m:
                if y in final_dict[key].keys() and y in dict2[key].keys():
                    final_dict[key][y].update(dict2[key][y])
                    
print(final_dict['AFG'])



def stripper(data):
    new_data = {}
    for k, v in data.items():
        if isinstance(v, dict):
            v = stripper(v)
        if not v in (u'', None, {}):
            new_data[k] = v
    return new_data

final_final_dict = stripper(final_dict)

import json
with open('mortality_malnutrition.json', 'w') as fp:
    json.dump(final_final_dict, fp)
