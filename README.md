# DICOM Viewer Project

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Localization](#localization)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Overview

The **DICOM Viewer Project** is a React-based web application that allows users to view and interact with DICOM (Digital Imaging and Communications in Medicine) files. This application leverages the CornerstoneJS library to render medical images and offers tools like ROI (Region of Interest) selection for detailed image analysis.

## Features

- **DICOM Image Rendering**: Load and display DICOM images in the browser.
- **Tool Support**: Includes tools like Rectangle ROI, Pan, and Zoom for detailed image analysis.
- **Patient Management**: View and manage a list of patients with associated DICOM images.
- **Localization**: Supports multiple languages, including English and Turkish.
- **Responsive Design**: Works across various screen sizes.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Install Node.js version 14 or higher.
- **npm**: Ensure npm is installed (comes with Node.js).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/dicom-viewer-project.git
   cd dicom-viewer-project
2. Installing Dependencies
   ```bash
   yarn install
   npm install
## Running the Application
1. Start the development server:
   ```bash
    npm start
    yarn start
2.	Access the application:
  Open your browser and navigate to http://localhost:3000.

# Project Structure
The project is structured as follows:

    dicom-viewer-project/
    ├── public/
    │   ├── assets/
    │   │   └── mockData/        # JSON files with mock patient data
    │   ├── locales/             # Localization files for different languages
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── common/          # Shared components like LanguageSelector
    │   │   ├── patient/         # Components related to patient management
    │   │   └── viewer/          # DICOM Viewer components
    │   ├── slices/              # Redux slices for managing state
    │   ├── pages/               # Page components for different views
    │   ├── i18n.js              # Localization configuration
    │   ├── App.js               # Main application component
    │   ├── store.js             # Redux store configuration
    │   └── index.js             # Application entry point
    ├── package.json
    └── README.md

## Localization
This project supports multiple languages. The translations are managed using react-i18next. The supported languages are:

  •	English (default)
  •	Turkish

## Adding a New Language

To add a new language:

1.	Create a new JSON file under public/locales/<lang-code>/translation.json.
2.	Update the i18n configuration in src/i18n.js to include the new language.

## Usage

Viewing a Patient’s DICOM Image

1.	On the home page, you’ll see a list of patients.
2.	Click the View DICOM button next to a patient to open their DICOM image.
3.	Use the tools provided (e.g., Rectangle ROI, Pan, Zoom) to analyze the image.

## Managing Patients

Patients are loaded from a mock data file (public/assets/mockData/patients.js). You can edit this file to add or remove patients.

## Troubleshooting

Common Issues

•	Tools Not Working: Ensure that the tools are correctly initialized in the DicomViewer.js component.
•	DICOM File Not Loading: Verify that the file paths in the patient mock data point to valid DICOM files in the public/assets/dicoms directory.
•	Localization Issues: Check that the translation.json files in the locales directory are correctly formatted and contain all necessary keys.

## Debugging Tips

•	Use the browser’s developer console to check for errors and debug issues.
•	Ensure all dependencies are correctly installed and up-to-date by running npm install.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request to contribute.

1.	Fork the repository.
2.	Create a new branch (git checkout -b feature/new-feature).
3.	Make your changes and commit them (git commit -m 'Add new feature').
4.	Push to the branch (git push origin feature/new-feature).
5.	Create a pull request.

