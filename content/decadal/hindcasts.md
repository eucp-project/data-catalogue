---
tag: Hindcasts
title: Story about EUCP contributions to DCPP.
img: lead_center.png
caption: The Lead Centre for Annual-to-Decadal Climate Prediction
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
    doi: https://www.doi.org/10.22033/ESGF/CMIP6.5137
    details: Decadal hindcasts with improved initialization strategy and increased resolution using IPSL-CM6A-LR at about 1° resolution. Initialized every year from 1960 to present. 10 members, 10-year-long simulations.

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

Decadal climate predictions forecast the future evolution of climate for timescales ranging from a month to a decade into the future. The main characteristic of these predictions is that they require accurate information about the present (or ‘initial’) state of the climate system since it provides some predictability for the future climate. They are therefore often termed ‘initialised’ simulations. Decadal climate predictions come with their challenges: they require sets of hindcasts that are very expensive to run (these test the model by running it over a period in the past and comparing the simulations to observations), strategies to replicate observational uncertainty, and they strongly rely on a consistent observation system. However, improving decadal climate forecasting is crucial, since it covers vital timescales for decision makers, such as climate predictions for the next few years ahead.