
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
from pathlib import Path
from itertools import product
import numpy as np
import xarray as xr
# plotting
import matplotlib
import matplotlib.pyplot as plt
import cartopy.crs as crs
from cartopy import feature as cfeature
# for clipping
import rioxarray
# Generate images without having a window appear
matplotlib.use('Agg')

#####################################################################
## This script is intended for batch processing of maps
#####################################################################

# function for plotting maps
def plot_map(dataset, outfile, region, variable):
    # Plot
    fig = plt.figure(dpi=120)
    ax = fig.add_subplot(111, projection=crs.PlateCarree())
    dataset.plot(ax=ax, cmap="BrBG", cbar_kwargs={'label': ''})
    # colorbar
    # cbar = fig.colorbar(im)
    # cbar.set_label('')
    # Prettify
    ax.add_feature(cfeature.OCEAN, zorder=2)
    ax.coastlines(zorder=3)
    ax.axis('off')
    if variable == "pr":
        ax.set_title('Relative precipitation (%)')
    elif variable == "tas":
        ax.set_title('Relative temperature (degC)')

    # Save
    fig.savefig(outfile)
    plt.close()

# function for region clipping
def region_clip(infile, region):
    # load dataset
    xds = xr.open_dataset(infile)
    # drop unused variables, otherwise it will cause 
    # an error when configuring the coordinate system
    xds = xds.drop_vars("lat_bnds")
    xds = xds.drop_vars("lon_bnds")
    # set-up the coordinate system known to rio
    xds.rio.write_crs("EPSG:4326", inplace=True)
    # clip data
    clipped_data = xds.unknown.rio.clip(regions[region], "EPSG:4326", all_touched=True)

    return clipped_data


if __name__ == "__main__":
    # define command line arguments
    parser = argparse.ArgumentParser()
    parser.add_argument('-i', '--inputdir', required=True, type=str, default="./",
                        help="directory containing preprocessed netCDF files [default current location]")
    parser.add_argument('-o', '--outputdir', required=True, type=str, default="./",
                        help="directory for output [default current location]")
    # get arguments
    args = parser.parse_args()
    # call plot()
    files(args.inputdir, args.outputdir)