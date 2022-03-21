[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=eucp-project_data-catalogue&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=eucp-project_data-catalogue)

# EUCP Data Catalogue

This repository contains the source code for the
[EUCP](https://www.eucp-project.eu/) [Data Catalogue
website](https://eucp-project.github.io/data-catalogue/).

One of the important outcomes of EUCP (European Climate Prediction system) project is
data. This includes:

- contributions to the CMIP6 decadal prediction project DCPP
- extension of CORDEX-FPS convection permitting model (CPM) data
- various smaller _ad hoc_ datasets resulting from multiple research activities

Decadal prediction data is available through ESGF and, more or less in parallel
with EUCP, C3S has developed a decadal predictions service, offering convenient
access to decadal prediction data through their climate data store.

Convection permitting model (CPM) output is also in the process of being added
to ESGF. However, unlike the decadal predictions, these datasets are less
mature and therefore they have not yet found their way into a service like C3S.

‘Ad hoc’ datasets are published in standard open data repositories such as
Zenodo. While this makes them available, they may be difficult to find and
lacking in documentation.

To overcome these limitations this data catalogue was developed. It is
primarily an overview of all data outputs of the project. Hardly any actual
data is hosted on the catalogue itself – instead, it redirects to the original
sources and provides additional context and documentation.

The data catalogue makes it possible to explore pre-generated maps and other
visualizations through intuitive controls. The underlying data is made
available via Zenodo.

The website has been built with [Nuxt](https://nuxtjs.org), using
[nuxt-content](https://content.nuxtjs.org/) for authoring stories and
[tailwindcss](https://tailwindcss.com/docs/installation) and [tailwind
typography](https://tailwindcss.com/docs/typography-plugin) for styling. It is
hosted on [GitHub pages](https://nuxtjs.org/deployments/github-pages/).

## Contributing guide
Your contribution is welcome! Find information on how to contribute, as well as
technical assistance on working with the Nuxt framework [here](CONTRIBUTING.md).