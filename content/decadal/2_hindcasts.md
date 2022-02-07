---
tag: Hindcasts
title: Decadal hindcasts in EUCP
img: decadal_hindcast.png
caption: Timeseries for Global Mean Near Surface Temperature (www.wmolc-adcp.org)
datasets:
  - title: BSC Increased resolution hindcasts
    contact:
      - name: Pablo Ortega
        orcid: 0000-0002-4135-9621
    workpackage: 1
    licencse:
    format: NetCDF
    size: 35-40 TB
    doi:
    details: Increased resolution decadal hindcasts with EC-Earth3 at T551/ORCA025. Initialized every 2 years (November 1st) from 1960 to present. 10 members, 5-years +2 month long simulations. Output as described in CMIP6 DCPP-A.

  - title: CNRS/IPSL-EPOC Increased resolution hindcasts
    contact:
      - name: Didier Swingedouw
        orcid: 0000-0002-0583-0850
      - name: Juliette Mignot
        orcid: 0000-0002-4894-898X
    workpackage: 1, 5
    licencse: CMIP6 (https://pcmdi.llnl.gov/CMIP6/TermsOfUse)
    format: NetCDF
    size: ~50 TB
    doi: 10.22033/ESGF/CMIP6.5137
    details: Decadal hindcasts with improved initialization strategy and increased resolution using IPSL-CM6A-LR at about 1° resolution. Initialized every year from 1960 to present. 10 members, 10-year-long simulations.

  - title: IPSL DCPP-A data for CMIP5 and CMIP6
    contact:
      - name: Didier Swingedouw
        orcid: 0000-0002-0583-0850
      - name: Juliette Mignot
        orcid: 0000-0002-4894-898X
    workpackage: 1, 5
    licencse: CMIP6 (https://pcmdi.llnl.gov/CMIP6/TermsOfUse)
    format: NetCDF
    size: ~20 TB
    doi: 10.22033/ESGF/CMIP6.5137
    details: DCPP-A from CMIP5, using IPSL-CM5A-LR, initialized from nudged simulation using SST nudging only. Start dates every year from 1960 to 2015, 3 members. De-biased data from CMIP5. Using CDFt technique (quantile-quantile approach), the CMIP5 data have been debiased.

  - title: SMHI Increased resolution hindcasts
    contact:
      - name: Tim Kruschke
        orcid: 0000-0002-1205-3754
    workpackage: 1
    licencse: CC-BY-SA
    format: NetCDF (and maybe GRIB)
    size: ~35 TB
    doi:
    details: Increased resolution decadal hindcasts with EC-Earth3 at T511/ORCA025. Initialized 1 Nov 1990-2004, 10 members each, integrated for 5 years + 2 months. Output as described in CMIP6 DCPP-A (Tier 1).
---
The EUCP project contributed several decadal hindcasts to the [Decadal Climate Prediction Project](https://www.wcrp-climate.org/modelling-wgcm-mip-catalogue/cmip6-endorsed-mips-article/1065-modelling-cmip6-dcpp) (DCPP). Most of these hindcasts belong to the component A of DCPP, which designs and organizes a coordinated decadal hindcast experiment, in conjunction with the seasonal prediction and climate modelling communities, and the production of a comprehensive archive of results for research and applications.

Hindcasts are forecasts for the past performed with the same forecast system. They can be compared with observations, and thus identify systematic errors (i.e. biases) and estimate their magnitude, as well as the performance of the forecast system, from a variety of perspectives.