# MyReads Project

## Setup The Project

- install all project dependencies with `npm install`

## Start The Project

- start the development server with `npm start`

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
    |    ├──main #folder that contains components used in main page
    |    |  ├──Shelf.js #Defines Shelf that contains a shelf-heading and a list of books
    |    |  ├──Book.js #Defines Book that defines a book having a thumbnail, title and name of authors
    |    |  ├──BookShelfChanger.js #Defines BookShelfChanger that contains a list of options to move books from one folder to another or to none.
    |    ├──search #folder that contains components used in search page
    |    |  ├──SearchPage #Defines a page containing search bar and space for books
    |    |  ├──SearchBar #Defines a input field to search books
    |    |  ├──SearchResultSpace #Defines a space for books which is retrieved after searching is completed
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


## Backend Server

To simplify the development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if the searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
#   r e a c t n d - p r o j e c t - m y r e a d s 
 
 
