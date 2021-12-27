import csv
from typing import final 
import pandas as pd
from functools import reduce
import country_converter as coco

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

df1 = process_metadata('gdp.csv')

#nation = [{date:dateobj, value: gdp}...]
print(df1)
nations = {}
years = ['1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']

for k in df1:
    for y in years: 
        if k["Country Code"] not in nations.keys():
            nations[k["Country Code"]] = [{'date':y, 'value':k[y]}]
        else: 
            nations[k["Country Code"]].append({'date':y, 'value':k[y]})
        

print(nations)

newnations = {}

for k in nations.keys(): 
    newk = coco.convert(names=k, to='name_short')
    if newk: 
        newnations[newk] = nations[k]
print(newnations)

import json
with open('gdp.json', 'w') as fp:
    json.dump(nations, fp)
import json
with open('ngdp.json', 'w') as fp:
    json.dump(newnations, fp)
