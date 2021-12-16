
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

