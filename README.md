# Omics Data Retrieval and Analysis System

## Overview

This system allows users to retrieve specific omics data, process it, and visualize the results. The project is composed of a React front-end and a Node.js back-end, both of which are containerized with Docker for easy setup and deployment.

## Prerequisites

Before starting, make sure you have Docker and Docker Compose installed on your system. For installation instructions, refer to the [official Docker documentation](https://docs.docker.com/get-docker/).

## Getting Started

To get the application running on your local machine, follow these steps:

1. Clone the repository to your local machine.
   ```sh
   git clone https://github.com/korayatmaca/Omics-Data-Retrieval-and-Analysis-System
   ```
2. Navigate to the project directory.
   ```sh
   cd path-to-your-project
   ```
3. Build and start the containers using Docker Compose.
   ```sh
   docker-compose up --build
   ```

After running these commands, the front-end application will be accessible at `http://localhost:3000`, and the back-end will be available at `http://localhost:5000`.

## API Endpoints

The back-end server exposes the following endpoints:

- `GET /api/gene-data`: Fetches gene expression data based on provided gene IDs.
- `GET /api/gene-analysis`: Retrieves statistical analysis (mean, median, variance) for the specified genes.

## Front-end Application

The React application provides a user interface to interact with the gene data. It includes features for data submission, visualization, and fetching statistical analysis.

## Using the Application

To use the application, follow these steps:

1. Enter the desired gene IDs in the input field provided on the front-end interface.
2. Click on "Fetch Data" to retrieve the gene expression data.
3. To view statistical analysis, click on "Get Statistics" after fetching the gene data.

## Database

The project utilizes a sample database for demonstration purposes, which is provided in the admin.test.csv file. To get the project up and running, import this file into MongoDB.

## Contributing

Contributions to the project are welcome. Please follow the standard fork-and-pull request workflow to contribute.