import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResultSpace from "./SearchResultSpace";
import * as BooksAPI from "../BooksAPI";
import _ from "lodash";

class SearchPage extends Component {
  state = {
    books: [],
  };

  handleSearch = (event) => {
    /* signal to React not to nullify the event object */
    event.persist();
    if (!this.debouncedFn) {
      this.debouncedFn = _.debounce(() => {
        let searchString = event.target.value;
        this.fetchSearchData(searchString);
      }, 200);
    }
    this.debouncedFn();
  };

  fetchSearchData = (query) => {
    BooksAPI.search(query)
      .then((data) => {
        if (data instanceof Array) {
          this.setState({
            books: data,
          });
        } else {
          this.setState({
            books: [],
          });
        }
      })
      .then((data) => {})
      .catch((err) => {});
  };

  render() {
    return (
      <div className="search-books">
        <SearchBar handleSearch={this.handleSearch} />
        <SearchResultSpace
          books={this.state.books}
          handlebookmove={this.props.handlebookmove}
        />
      </div>
    );
  }
}

export default SearchPage;
