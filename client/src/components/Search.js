import React from "react";
import styled from "styled-components";
import YTSearch from "youtube-api-search";

class Search extends React.Component {
  state = { term: "" };

  handleSubmit = event => {
    event.preventDefault();
    const term = this.state.term;
    const API_KEY = "AIzaSyCzBCE_cIVEImQjC5DEsznG_XTgnHfmGcA";
    YTSearch({ key: API_KEY, term }, data => {
      const videos = data.map(video => {
        return {
          title: video.snippet.title,
          description: video.snippet.description,
          url: `https://www.youtube.com/embed/${video.id.videoId}`,
          trailer: video.snippet.thumbnails.default.url
        };
      });
      this.props.setSearched(videos);
      this.setState({ term: "" });
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <SearchForm onSubmit={this.handleSubmit}>
        <SearchInput
          type="text"
          name="term"
          value={this.state.term}
          onChange={this.handleChange}
          placeholder="search videos ......"
        />
      </SearchForm>
    );
  }
}

const SearchForm = styled.form`
  position: absolute;
  top: 5.1rem;
  left: 0;
  width: 100vw !important;
  background-color: #de1738;
  text-align: center;
`;

const SearchInput = styled.input`
  width: 50%;
  height: 3rem;
  padding-left: 2rem;
  font-size: 1.5rem;
  border: none;
  outline: none;
  border: 3px solid lightgrey;
  border-radius: 100px;
  margin: 1rem auto;
`;

export default Search;
