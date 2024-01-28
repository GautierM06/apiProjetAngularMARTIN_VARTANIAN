# Angular Project: Assignment API

## Repository for the Backend of Angular Assignment Project

### Developed by Alessandro VARTANIAN and Gautier MARTIN

## Overview

This repository contains the backend API for the Angular Assignment Project found at [https://github.com/alessandrov24/ProjetAngularMARTIN_VARTANIAN.git](https://github.com/alessandrov24/ProjetAngularMARTIN_VARTANIAN.git). The API is responsible for handling all the data operations for the frontend application. It manages user authentication, assignment data processing, and interacts with a MongoDB database to store and retrieve a large dataset of assignments.

## Getting Started

To set up the backend API on your local machine, follow these steps:

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the backend repository:
   ```sh
   git clone https://github.com/GautierM06/apiProjetAngularMARTIN_VARTANIAN.git
   ```
2. Navigate to the project directory:
   ```sh
   cd apiProjetAngularMARTIN_VARTANIAN
   ```
3. Install the required npm packages:
   ```sh
   npm install
   ```

### Running the API

To start the API locally:
```sh
npm start
```
The API will be running on `http://localhost:[port]/`, where `[port]` is the port number configured in your application (default is usually 3000 or 8000).

## Hosting

The backend API is deployed and hosted at: [https://apiprojetangular.onrender.com](https://apiprojetangular.onrender.com)

## Database

The API interacts with a MongoDB database, handling a dataset of 1000 assignments. It performs CRUD (Create, Read, Update, Delete) operations, providing the necessary data to the frontend Angular application.

## Features

- Manages user authentication and session.
- Processes and provides assignment data for the frontend.
- CRUD operations with MongoDB database.
- Supports role-based access control for different user types.