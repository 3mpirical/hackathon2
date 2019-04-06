import React from "react";
import Search from "./Search";
import styled from "styled-components";

class HomeAndIndexContainer extends React.Component {
  state = { searched: false, videos: [] };

  setSearched = videos => {
    this.setState({ videos, searched: true });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Container>
          <Search setSearched={this.setSearched} />
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  padding-top: 6rem;
`;

export default HomeAndIndexContainer;
