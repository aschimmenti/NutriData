from os import name
from typing import final
import pandas as pd
import numpy as np
import spacy
import country_converter as coco

df = pd.read_csv("./IHME-GBD_2019_DATA-27a144e6-1.csv", header=None, sep=",")
headerName=['measure','country','sex','age','cause','metric','year','val','upper','lower']

df.columns=headerName

input_countries = df['country'].to_list()

import country_converter as coco
cc = coco.CountryConverter()


standard_names = coco.convert(names=input_countries, to='name_short')
print(standard_names)

iso2_codes = coco.convert(names=standard_names, to='ISO3')

#for country in pycountry.countries:
#    countries[country.name] = country.alpha_2

#codes = [countries.get(country, 'Unknown code') for country in input_countries]

df2 = pd.DataFrame({'ISO':iso2_codes})
df['ISO'] = df2['ISO']


df.to_csv("./IHME-GBD_2019_DATA-27a144e6-1_ISO3-ready.csv", sep=",")