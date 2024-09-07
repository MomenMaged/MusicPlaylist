import React from "react";
import "./SearchBarplay.css";

class SearchBarplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
  }
  search() {
    this.props.onSearchh(this.state.term);
  }
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="SearchBarplay">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange}
        />
        {/* <button className="SearchButton" onClick={this.search}>
          SEARCH
        </button> */}
      </div>
    );
  }
}

export default SearchBarplay;
