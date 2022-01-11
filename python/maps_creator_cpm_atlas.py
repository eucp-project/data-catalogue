
"""
Update content of the CPM Atlas - generate maps based on the CPM data
Function        : Plot maps in a uniform way based on the CPM data
Author          : Team BETA
First Built     : 2021.12.15
Last Update     : 2021.12.16
Library         : os, glob, netcdf4, matplotlib, cartopy, argparse
Description     : This script serves to extract netcdf data and generate maps
                  for CPM catalogue page.
Return Values   : png files
Note            : All the maps are generated in a uniform way.
"""

import os
from pathlib import Path
import argparse
import matplotlib
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
from textwrap import wrap
import xarray as xr
# Generate images without having a window appear
matplotlib.use('Agg')

#####################################################################
## This script is intended for batch processing of maps
## will be complete when the choices of cpm images were made.
#####################################################################

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