---
tag: Experiments
title: Experiments contributing to the Decadal Climate Prediction Project
img: lead_center.png
caption: The Lead Centre for Annual-to-Decadal Climate Prediction
datasets:
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
    doi: https://www.doi.org/10.22033/ESGF/CMIP6.5137
    details: DCPP-A from CMIP5, using IPSL-CM5A-LR, initialized from nudged simulation using SST nudging only. Start dates every year from 1960 to 2015, 3 members. De-biased data from CMIP5. Using CDFt technique (quantile-quantile approach), the CMIP5 data have been debiased.

  - title: BSC Volcanic aerosol experiments
    contact:
      - name: Roberto Bilbao
        orcid: 0000-0003-0729-4980
    workpackage: 1
    licencse:
    format: NetCDF
    size: 35-40 TB
    doi:
    details: "Four volcanic aerosol DCPP-C experiments: (1) Repeat 1991 hindcast without Pinatubo forcing (10 years x 10 members) (2)Repeat 1982 hindcast without El Chichon forcing (10 years x 10 members) (3) Repeat 1963 hindcast without Agung forcing (10 years x 10 members) (4) Repeat 2015 hindcast with Pinatubo forcing (10 years x 10 members). Output as described in CMIP6 DCPP-C."

  - title: UOXF Stochastic physics experiments
    contact:
      - name: Daniel Befort
        orcid: 0000-0002-2851-0470
      - name: Antje Weisheimer
        orcid: 0000-0002-7231-6974
    workpackage: 1
    licencse:
    format: GRIB
    size: ~20 TB
    doi:
    details: "2 experiments targeting to assess the impact of stochastic physics (SPPT) on sub-decadal time-scales. General settings: Model: IFS CY46R1; Resolution: TCo199; 1deg Ocean; Initialization: November 1981-2014; Hindcast length: 28 months; Ensemble size: 25 (first 7 months); 10 (8-28 months). Specific settings: Experiment #1: w/ SPPT; Experiment #2: w/o SPPT"
---

Exploring avenues to improve the next generation of climate predictions with experiments on the impact of resolution, initialisation, forecast drift reduction and short-lived climate forcings.