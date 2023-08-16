# DrinkHub Web Application (Big Project 3)

# Introduction
    For this project, we utilized the Cocktail Database to list out a number of popular drinks, and how to make them. We also built out a backend that allows a user account to be created which in turn allows that user to interact with the site. A user can sign up, pin their favorite drinks to the favorites page, and create, edit, and delete custom drinks that are added to the database.

# Deployed Application and REPO

Deployed - https://drinkhubfoxtails.netlify.app/

REPO:

  Front-End - https://github.com/DanSinensky/drinks-frontend

  Back-End - https://github.com/DanSinensky/drinks-backend

# Team members/Maintainers
    Kyle Harris - https://github.com/kyleharris007
    Diego Sousa - https://github.com/dmenezessousa
    Adam Dawson - https://github.com/adamdawson21
    Danish Mansoor - https://github.com/danish4101
    Dan Sinensky - https://github.com/dansinensky

# Technical Specifications
    For this project, the following software was utilized:
        -Mongoose
        -Express
        -React
        -Node.js
        -Heroku
        -Netlify
        -JavaScript
        -HTML
        -CSS
        -Axios
    
    This project has full CRUD functionality.

# Schema
User Account:
    
      firstName: "String",
      lastName: "String",
      userName: "String",
      email: "String",
      password: "String"
    

Drinks:
    
    drinkName: "String",
    drinkCategory: "String",
    drinkInstructions: "String",
    drinkIsAlcoholic: "String",
    drinkGlassType: "String",
    drinkImage: "String",
    drinkMeasure1: "String",
    drinkIngredient1: "String",
    drinkMeasure2: "String",
    drinkIngredient2: "String",
    drinkMeasure3: "String",
    drinkIngredient3: "String",
    drinkMeasure4: "String",
    drinkIngredient4: "String",
    drinkMeasure5: "String",
    drinkIngredient5: "String",
    drinkMeasure6: "String",
    drinkIngredient6: "String",
    drinkMeasure7: "String",
    drinkIngredient7: "String",
    drinkMeasure8: "String",
    drinkIngredient8: "String",
    drinkMeasure9: "String",
    drinkIngredient9: "String",
    drinkMeasure10: "String",
    drinkIngredient10: "String",
    
# Routes and CRUD

Route | Screen | CRUD
------------ | ------------- | -------------
/ | Home (redirected to sign-in page) | Read
/sign-in | Sign-in | Read
/sign-up | Sign-up | Create
/drinks | Drinks | Read
/drinks/:id | Drink | Read
/favorites | Favorites | Read
/favorites | Delete Favorite | Delete
/add-drink | Add Drink | Create
/:id/edit | Edit Drink | Update

# Whimsical Flowchart

    https://files.slack.com/files-tmb/T0351JZQ0-F05MYBJHCMS-8493f672f7/screenshot_2023-08-08_at_3.53.17_pm_720.png

# Team Expectations

    https://docs.google.com/document/d/18cZCJAReJgLjelt24W-N5gQMPe5syK1CY_a6tGfwBF0/edit

# Functionality

    Upon following the deployed link - the user is immediately brought to a sign in page (this is the default route). From this endpoint, the user can go ahead and look/search throughout the database of cocktails. If the user would like a more personal experience, they would need to create an account, which is easily accessible from the navbar. To create an account, the user must enter their first name, last name, username, email and password. Once created, this information is stored in our database. Once they log into the site using their credentials, they gain access to edit and/or favorite any beverages in the database. Once favorited, the beverages are added to the user's personal favorites page. The user also has the ability to create a drink and add it the database. In order to do this, the user must enter the drink's name, image, alcohol, type, ingredients and amounts used, and any special instructions needed.

# Installation
    To install, fork and clone this repository. Once you have cloned, use npm i to install dependencies and npm start to run the react application. From there, open up the code in your IDE of choice, and enjoy!


# Usage
    This project can be used for any website you want to create that includes a custom user, saving, editing and removing custom favorites, and displaying relevant API data on the main webpage. This could come in handy for a user who wants to browse through data, and store their favorite selections on a seperate page.


# Contributing
    Pull requests are welcome. You can also reach out directly to give input or pitch an idea.


# Copyright
    © Copyright 2023 All Rights Reserved.



