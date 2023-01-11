# Importing Libraries
import pandas as pd
import numpy as np
from fastapi import FastAPI
from fastapi.responses import JSONResponse
import uvicorn

# Initializing FastAPI instance
app = FastAPI()

# API 1st End-point
@app.get("/production")
def crop_production_average():
    data_prod = pd.read_excel("Crop_Production.xlsx")
    data_prod["Year"] = data_prod["Year"].str[0:2]+data_prod["Year"].str[5:7]
    df = data_prod[data_prod["Year"]>="1950"]
    average_crop_production = df.groupby("Year")["Pakistan"].mean()
    average_crop_production = {"Index":list(average_crop_production.index), "Values":list(average_crop_production.values)}
    return JSONResponse(content=average_crop_production)

# API 2nd End-point
@app.get("/consumption")
def crop_consumption_fertilizer_total():
    data_fertilizer = pd.read_excel("Crop_wise_consumption_of_fertilizers.xlsx")
    total_crop_fertilizer_consumption = data_fertilizer.groupby("Year")["Total_000nutrient tonnes"].mean()
    total_crop_fertilizer_consumption = {"Index":list(total_crop_fertilizer_consumption.index), "Values":list(total_crop_fertilizer_consumption.values)}
    return JSONResponse(content=total_crop_fertilizer_consumption)

# API 3rd End-point
@app.get("/timber")
def average_timber_cost():
    data_forest = pd.read_excel("Output of Major Forest Products.xlsx")
    average_timber_value = data_forest.groupby("Year")["Timber_Value(Million Rupees)"].mean()
    average_timber_value = {"Index":list(average_timber_value.index), "Values":list(average_timber_value.values)}
    return JSONResponse(content=average_timber_value) 

# API 4th End-point
@app.get("/firewood")
def average_firewood_cost():
    data_forest = pd.read_excel("Output of Major Forest Products.xlsx")
    average_firewood_value = data_forest.groupby("Year")["Firewood_Value(Million Rupees)"].mean()
    average_firewood_value = {"Index":list(average_firewood_value.index), "Values":list(average_firewood_value.values)}
    return JSONResponse(content=average_firewood_value) 

# API 5th End-point
@app.get("/locations")
def suitable_sites_locations():
    data_suitable_sites = pd.read_excel("Suitable Sites.xlsx")
    locations = {"Latitude":list(data_suitable_sites["Latitude"].values), "Longitude":list(data_suitable_sites["Longitude"].values)}
    return JSONResponse(content=locations)

# Main program
if __name__=="__main__":
    uvicorn.run(app, port = 8000)