# Pintu Crypto Market Page

<p align="center">
  <img src="src/assets/icons/Logo.svg" alt="Logo">
  <br>
  <a href="https://pintu-markets.vercel.app/"><strong>View Demo</strong></a>
</p> 

A replica page of pintu.co.id/market focused on the token list in Indonesian Rupiah (IDR).

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [Installation](#installation)
- [Built With](#built-with)
- [Dev Documentation](#dev-documentation)
- [Contact](#contact)

## Introduction

Welcome to the Pintu Crypto Market Page! This project aims to replicate the functionality of the pintu.co.id/market page, with a specific focus on displaying the token list in Indonesian Rupiah (IDR). Users can explore the various tokens available for trading and access relevant market information.

## Usage

The Pintu Crypto Market Page provides a user-friendly interface for exploring the token list in Indonesian Rupiah (IDR). Users can navigate through the available tokens and view market data for each token. For actual transactions and in-depth details, please visit the official website at https://pintu.co.id/.

### Desktop View

![](src/assets/images/DesktopView.jpg)

### Mobile View

![](src/assets/images/MobileView.jpg)

## Installation

To install and set up the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running the following command:

```
npm install
```
4. Once the installation is complete, start the development server:

```
npm start
```

5. Open your browser and navigate to http://localhost:3000 to access the Pintu Crypto Market Page.

## Built With

This project is built using the following technologies and frameworks:
- React.js
- JavaScript
- Tailwind CSS
- React-Query
- Hooks

## Dev Documentation

Replicate website [https://pintu.co.id/market](https://pintu.co.id/market) components :
- [x] Responsive Token List
- [x] Tags
- [x] SearchBar
- [x] Automated Deployment 
- [ ] Tags Filtering
- [ ] Search Function
- [ ] Sorting Token
- [ ] Testing
- [ ] Storybook


### Installing requirements

1. Create React App using create-react-app
```
npx create-react-app pintu-markets
cd pintu-markets
```

2. Install libraries
```
npm install react-query tailwindcss eslint-plugin-react react-svg http-proxy-middleware react-query
```

3. Configure tailwind.config.js

4. Configure Vercel.json
```
{
    "rewrites": [
        {
        "source": "/api/:path*",
        "destination": "https://api.pintu.co.id/v2/:path*"
        }
    ]
}
```

5. Create Components
 - Navbar
 - Searchbar
 - Tags
 - Tables

6. Create Market Pages


## Contact

For any questions or feedback, please feel free to reach out to me:

 Email: [rebecca.yohanna@gmail.com](mailto:rebecca.yohanna@gmail.com)

Thank You!
