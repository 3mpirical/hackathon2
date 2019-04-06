import React from "react";
import Search from "./Search";
import styled from "styled-components";
import Home from "./Home";
import ResultsIndex from "./ResultsIndex";
import axios from "axios";

class HomeAndIndexContainer extends React.Component {
  state = { searched: false, videos: [] };

  componentDidMount() {
    axios
      .get(`/api/videos`)
      .then(res => {
        this.setState({ videos: res.data });
      })
      .catch(err => console.log(err));
  }

  setSearched = videos => {
    this.setState({ videos, searched: true });
    console.log(this.state);
  };

  render() {
    const { videos } = this.state;
    return (
      <>
        <Container>
          <Search setSearched={this.setSearched} />
          {!this.state.searched ? (
            <Home videos={videos} />
          ) : (
            <ResultsIndex videos={videos} history={this.props.history} />
          )}
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  padding-top: 6rem;
`;

export default HomeAndIndexContainer;
