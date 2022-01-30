# Introduction to the website

This project was created on top of the React library for users who want to plan a vacation in any available city (https://es.reactjs.org/).

## features

This project has as its beginning a menu bar where each category is redirected and a link where all the content can be viewed, within the categories there are cards with information about the services, created in components, html and css having interaction with each other .

## functions used

useEffect, useState, useParams, link.

## Installation, Execution

In order to run the program you must ...

### `npm i or npm install`

With npm i or npm install you will be able to install all the necessary dependencies to make the application work.

### `npm start`

With npm start, you can start the application, in general, it will open only after a few minutes, if not, entering [http: // localhost: 3000], you will see the result.

### `Cntrl + C`

With control + C, you can end the execution of the program.

## What programming languages did I use to do this?

The programming languages I used were:

- Html
- Css / Sass
- JavaScript
- React JS
- Node JS (For server execution)

The database used is:

- Firebase

### `.env`

Add an .env with the firebase data to make the app work.

## Text for example

REACT_APP_apiKey: "AIzaSyC_O6pSDOQHoJX88Dtd9YIrH-iM52i_Wbk"
REACT_APP_authDomain: "flynow-80c3a.firebaseapp.com",
REACT_APP_projectId: "flynow-80c3a",
REACT_APP_storageBucket: "flynow-80c3a.appspot.com",
REACT_APP_messagingSenderId: "881028651021",
REACT_APP_appId: "1:881028651021:web:65d8a6bcce027b9c8b1d44"

### APP routes

- / -> ItemListContainer -> is the main router.
- / category /: categoryId -> ItemListContainer -> is the router for specific product categories.
- / item /: paramId -> ItemDetailContainer -> is the product detail router.
- / cart -> CartContainer -> is the shopping cart router.
- / checkout -> CheckoutContainer -> is the checkout router.
- / dashboard -> DashboardContainer -> is the dashboard router.

### What data does an item have when adding it to the cart?

The data they have when you add it to the cart, is an object of {item, count};

- Item -> is the product object that was added to the cart.
- Count -> is the number of products that were added to the cart.

### What data does it have when you generate an order?

The data that an order has are:

- buyer -> is an object with the data of the user who made the order.
- items -> is an object of {item, count};
- total -> the total price purchased.

## How does the project work?

### `ItemListContainer`

The ItemListContainer contains a list of all the products found in the product.

### `ItemDetailContainer`

The ItemDetailContainer contains the details of a specific product, which is received by ID through the `useParams` of React Router.

### `CartViewContainer`

The cartViewContainer contains a list of all the products that are in the shopping cart that the user chose.

### `CheckoutContainer`

The checkoutContainer contains a form with restrictions to register the user's data and thus add it to the database.

### `DashboardContainer`

The DashboardContainer contains a list of all the products that the user bought through their email.

## Autor

Vanessa peña, 26 years old. "# FlyNow" 