#!/usr/bin/python3

import csv

string_output = """var projectes = {
  "type": "FeatureCollection",             
  "features": ["""

with open('MapaProjectes.csv', newline='') as csvfile:
    projectes = csv.reader(csvfile, delimiter=',', quotechar='|')

    for index, row in enumerate(projectes):
        if row[2] and index>0: 
            string_output += """
    {
        "type": "Feature",
        "properties": {
            "name": """
            string_output += '"' + row[0] + '"'
            string_output += """,
            "sector":"""
            string_output += '"' + row[1] + '"'
            string_output += """,
            "descripcio":"""
            string_output += '"' + row[4] + '"'
            string_output += """
        },
        "geometry": {
            "type": "Point",
            "coordinates": ["""
            string_output += row[3] + "," + row[2] + "]"
            string_output +="""
        }
    },"""

string_output += """
]}"""
print(string_output)
