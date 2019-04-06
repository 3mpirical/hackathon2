import React from "react";
import styled from "styled-comonents";

class AddVideo extends React.Component {
  state = {};

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return <form action="" />;
  }
}

export default AddVideo;
