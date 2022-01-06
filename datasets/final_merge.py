import json
import country_converter as coco
cc = coco.CountryConverter()

# Opening JSON file

c = open('dailycalories.json')
calories = json.load(c)

fs = open('foodsupplyadequacy.json')
foodsupply = json.load(fs)

gdp = open('gdp.json')
gdpdata = json.load(gdp)

con = open('malnutrition.json')
conditions = json.load(con)

m = open('mortality.json')
mrt = json.load(m)

p = open('pathologies.json')
pathologies = json.load(p)

listofjsons = [calories, foodsupply, gdpdata, conditions, mrt, pathologies]


