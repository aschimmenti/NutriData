import json 

ihme = json.load(open("data_merges\ihme_diseases_final.json"))
mm = json.load(open("data_merges\mortality_malnutrition.json"))

import collections.abc

def update(d, u):
    for k, v in u.items():
        if isinstance(v, collections.abc.Mapping):
            d[k] = update(d.get(k, {}), v)
        else:
            d[k] = v
    return d

x = update(mm, ihme)
print(x['IDN'])

with open('final_merged_datasets_mm-side.json', 'w') as fp:
    json.dump(x, fp)