import React from "react";
import YTSearch from "youtube-api-search";
// import styled from "styled-components";

// API_KEY = "AIzaSyCzBCE_cIVEImQjC5DEsznG_XTgnHfmGcA";
// YTSearch({ key: API_KEY, term: "developers" }, data => {
//   console.log(data);
// });

class Video extends React.Component {
  state = { videos: [] };

  componentDidMount() {
    const API_KEY = "AIzaSyCzBCE_cIVEImQjC5DEsznG_XTgnHfmGcA";
    YTSearch({ key: API_KEY, term: "developers" }, data => {
      this.setState({ videos: data });
    });
  }

  renderVideos = () => {
    console.log(this.state.videos);
    return this.state.videos.map(video => {
      return (
        <iframe
          title="youtube video"
          key={video.id.videoId}
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          style={{ height: "30rem", width: "40rem" }}
        />
      );
    });
  };

  render() {
    return <>{this.state.videos && this.renderVideos()}</>;
  }
}

// const VideoIframe = styled.iframe`
//   height: 30rem;
//   width: 40rem;
// `;

export default Video;
