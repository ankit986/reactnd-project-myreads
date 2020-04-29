# MyReads Project


## Description

MyReads is a react project that helps to organise different books on different shelves like Currently Reading Shelf, Want To Read Shelf and Read shelf. It allows to transfer the book from one shelf to another. It allows to search books and to add them in different shelf.


## Installation
- Clone the repo in your terminal by clicking the _green_ clone or download button at the top right and copyin the url
- In your terminal, type ```git clone URL```
  - replace URL with the url you copied
  - hit enter
- This will copy all the files from this repo down to your computer
- In your terminal, cd into the directory you just created
- Type ```npm install``` to install all dependencies
- start the development server with `npm start`
- open http://localhost:3000 to view it in the browser.

## TL;DR

To get started developing right away:

## src folder contains

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for searching books related to that termm.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # Project Icon
│   └── index.html # Main HTML File
└── src
    ├── Components # folder that contains all the components used to make the project except App Component
    │    ├──main #folder that contains components used in main page
    │    │  ├──Shelf.js #Defines Shelf that contains a shelf-heading and a list of books
    │    │  ├──Book.js #Defines Book that defines a book having a thumbnail, title and name of authors
    │    │  ├──BookShelfChanger.js #Defines BookShelfChanger that contains a list of options to move books from one folder to another or to none.
    │    ├──search #folder that contains components used in search page
    │    │  ├──SearchPage #Defines a page containing search bar and space for books
    │    │  ├──SearchBar #Defines a input field to search books
    │    │  ├──SearchResultSpace #Defines a space for books which is retrieved after searching is completed
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for the app. Use at the discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```


#� �r�e�a�c�t�n�d�-�p�r�o�j�e�c�t�-�m�y�r�e�a�d�s�
�
�
