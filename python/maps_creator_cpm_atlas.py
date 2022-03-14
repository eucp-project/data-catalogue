
"""
Update content of the CPM Atlas - generate maps based on the preprocessed CPM data
Function        : Plot maps in a uniform way based on the preprocessed CPM data
Author          : Team BETA
First Built     : 2022.03.02
Last Update     : 2022.03.07
Library         : os, pathlib, itertools, matplotlib, cartopy, xarray, rioxarray, argparse
Description     : This script serves to extract netcdf data and generate maps
                  for CPM catalogue page.
Return Values   : png files
Note            : The data is preprocessed and provided by Tom Crocker from Met Office.
"""

import os
import argparse
from pathlib import Path
from itertools import product
import numpy as np
import xarray as xr
# plotting
import matplotlib
import matplotlib.pyplot as plt
import cartopy.crs as crs
from cartopy import feature as cfeature
from textwrap import wrap
# for clipping
import rioxarray

#####################################################################
## This script is intended for batch processing of maps
#####################################################################
# model and project list
# [cpm model name, cordex model name, cmip model name]
model_project_list = [   
    ["CLMcom-CMCC-CCLM5-0-9", "CCLM4-8-17 ICHEC-EC-EARTH", "EC-EARTH"], #CMIP5
    ["CNRM-AROME41t1", "ALADIN63 CNRM-CERFACS-CNRM-CM5", "CNRM-CM5"], #CMIP5
    ["COSMO-pompa", "CCLM4-8-17 MPI-M-MPI-ESM-LR", "MPI-ESM-LR"], #CMIP5
    ["GERICS-REMO2015", "REMO2015 MPI-M-MPI-ESM-LR", "MPI-ESM-LR"], #CMIP5
    ["HadREM3-RA-UM10.1", "MOHC-HadGEM3-GC3.1-N512 MOHC-HadGEM2-ES", "HadGEM2-ES"], #CMIP5
    ["HCLIMcom-HCLIM38-AROME", "HCLIMcom-HCLIM38-ALADIN ICHEC-EC-EARTH", "EC-EARTH"], #CMIP5
    ["ICTP-RegCM4-7-0", "ICTP-RegCM4-7-0 MOHC-HadGEM2-ES", "HadGEM2-ES"], #CMIP5
    ["KNMI-HCLIM38h1-AROME", "KNMI-RACMO23E KNMI-EC-EARTH", "EC-EARTH"], #CMIP5
    #["ICTP-RegCM4-7", "ICTP-RegCM4-7-0 MOHC-HadGEM2-ES", "HadGEM2-ES"], #CMIP5
    #["SMHI-HCLIM38-AROME", "SMHI-HCLIM38-ALADIN ICHEC-EC-EARTH", ], 
]

# define geometries for clipping by regions
regions = {
  "NW": [
    {
      'type': 'Polygon',
      'coordinates': [[[-8.0, 40.4], [11.0, 40.4], [15.2, 58.6], [-12.5, 58.6], [-8.0, 40.4]]]
    }
  ],
  "SW": [
    {
      'type': 'Polygon',
      'coordinates': [[[-10, 30], [7.4, 33], [5.7, 48.9], [-15, 45.4], [-10, 30]]]
    }
  ],
  "SE": [
    {
      'type': 'Polygon',
      'coordinates': [[[12.5, 34.3], [28.5, 34.3], [29.4, 40.9], [11.5, 40.9], [12.5, 34.3]]]
    }
  ],
  "C": [
    {
      'type': 'Polygon',
      'coordinates': [[[5.0, 44.5], [18.0, 45.5], [18.0, 56.0], [1.0, 53.0], [5.0, 44.5]]]
    }
  ],
  "CE": [
    {
      'type': 'Polygon',
      'coordinates': [[[17.8, 41.5], [31.3, 41.5], [32.8, 51.6], [16.4, 51.6], [17.8, 41.5]]]
    }
  ],
  "N": [
    {
      'type': 'Polygon',
      'coordinates': [[[1, 50.7], [26.7, 49.7], [44.1, 70.6], [-9.4, 72.6], [1, 50.7]]]
    }
  ],
  "AL": [
    {
      'type': 'Polygon',
      'coordinates': [[[1, 40], [17, 40], [17, 50], [1, 50], [1, 40]]]
    }
  ]
}

# function for plotting maps
def plot_map(dataset, outfile, model, season, region, variable):
    # Plot
    fig = plt.figure(dpi=120)
    ax = fig.add_subplot(111, projection=crs.PlateCarree())
    if variable == "pr":
        levels = np.arange(-60, 61, 2)
        dataset.plot(ax=ax, levels=levels, cmap="BrBG",
                     cbar_kwargs={'label': 'Precipitation change (%)',
                                  'extend': 'neither'})
    elif variable == "tas":
        levels = np.arange(-3, 6.1, 0.2)
        dataset.plot(ax=ax, levels=levels, cmap="YlOrRd",
                     cbar_kwargs={'label': 'Temperature change (degC)',
                                  'extend': 'neither'})
    # colorbar
    # cbar = fig.colorbar(im)
    # cbar.set_label('')
    # Prettify
    ax.add_feature(cfeature.OCEAN, zorder=2)
    ax.coastlines(zorder=3)
    ax.axis('off')
    if variable == "pr":
        ax.set_title("\n".join(wrap(f'{model} | {season} | {region}', 30)))
    elif variable == "tas":
        ax.set_title("\n".join(wrap(f'{model} | {season} | {region}', 30)))

    # Save
    fig.savefig(outfile)
    plt.close()

# function for region clipping
def region_clip(infile, region):
    # load dataset
    xds = xr.open_dataset(infile)
    # change filled values to 0, to avoid errors after clipping
    xds["unknown"] = xds.unknown.where(xds.unknown<1e+10, 0)
    # drop unused variables, otherwise it will cause 
    # an error when configuring the coordinate system
    xds = xds.drop_vars("lat_bnds")
    xds = xds.drop_vars("lon_bnds")
    # set-up the coordinate system known to rio
    xds.rio.write_crs("EPSG:4326", inplace=True)
    # clip data
    clipped_data = xds.unknown.rio.clip(regions[region], "EPSG:4326", all_touched=True)

    return clipped_data

def flatten(nasted_list):
    """
    input: nasted_list - this contain any number of nested lists.
    ------------------------
    output: list_of_lists - one list contain all the items.
    """

    list_of_lists = []
    for item in nasted_list:
        list_of_lists.extend(item)
    return list_of_lists

def files(inputdir):
    # load all datasets and plot maps
    seasons = ['DJF', 'JJA']
    #seasons = ['DJF', 'MAM', 'JJA', 'SON']
    variables = ['tas', 'pr']
    #projects = ['CMIP5', 'CMIP6', 'CORDEX', 'cordex-cpm']
    
    # flatten the list of models
    model_project_list = flatten(model_project_list)

    for variable, season, region in product(variables, seasons, regions.keys()):
        directory = inputdir + f"/{variable}_anoms/main/{season}"
        for infile in Path(directory).iterdir():
            # handle exceptions of file naming
            if 'rg' in str(infile):
                project, model, _, _, season = infile.stem.split('_')
                model = model + '-rg' # include the 'rg' tag in the name
            elif 'drivers' in str(infile):
                pass
            else:
                project, model, _, season = infile.stem.split('_')
                # handle exceptions of redundant region file naming
                if project == "cordex-cpm":
                    try:
                        model, redundant_region = model.split(' ')
                    except:
                        pass 
            # to handle the exception when the clipped region is empty
            if model in model_project_list:
                try:
                    clipped_region = region_clip(infile, region)
                    # skip regions with only a few valid points
                    if (len(np.unique(clipped_region.data)) < 50):
                        pass
                    else:
                        outfile = f"../static/maps/{region}/{variable}/{project}_{model}_{season}.png"
                        plot_map(clipped_region, outfile, model, season, region, variable)
                        print(f"Processed {infile}, created {outfile}.")
                except Exception as e:
                    print(e)
                    pass

if __name__ == "__main__":
    # define command line arguments
    parser = argparse.ArgumentParser()
    parser.add_argument('-i', '--inputdir', required=True, type=str, default="./",
                        help="directory containing preprocessed netCDF files [default current location]")
    # get arguments
    args = parser.parse_args()
    # call plot()
    files(args.inputdir)