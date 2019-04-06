import React from "react";
import styled from "styled-components";
import axios from "axios";
import { AuthConsumer } from "../providers/AuthProvider";

class AddVideo extends React.Component {
  state = {
    ...this.props.video,
    genre: "miscellaneous",
    duration: "short",
    user_id: null
  };

  handleSubmit = event => {
    event.preventDefault();
    const video = this.state;
    axios
      .post(`/api/videos`, video)
      .then(res => {
        this.props.history.push(`/videos/${res.data.id}`);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <AuthConsumer>
        {auth => {
          if (!this.state.user_id) this.setState({ user_id: auth.user.id });
          return (
            <AddVideoForm onSubmit={this.handleSubmit}>
              <select
                name="genre"
                onChange={this.handleChange}
                value={this.state.genre}
              >
                <option value="miscellaneous">miscellaneous</option>
                <option value="animals">animals</option>
                <option value="music">music</option>
                <option value="self help">self help</option>
                <option value="gaming">gaming</option>
                <option value="tech">tech</option>
                <option value="outdoors">outdoors</option>
                <option value="reality">reality</option>
              </select>
              <select
                name="duration"
                onChange={this.handleChange}
                value={this.state.duration}
              >
                <option value="short">short</option>
                <option value="medium">medium</option>
                <option value="long">long</option>
              </select>
              <button>submit</button>
            </AddVideoForm>
          );
        }}
      </AuthConsumer>
    );
  }
}

const AddVideoForm = styled.form``;

export default AddVideo;
