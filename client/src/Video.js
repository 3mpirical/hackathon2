import React from "react";
import YTSearch from "youtube-api-search";

// API_KEY = "AIzaSyCzBCE_cIVEImQjC5DEsznG_XTgnHfmGcA";
// YTSearch({ key: API_KEY, term: "developers" }, data => {
//   console.log(data);
// });

class Video extends React.Component {
  state = { videos: [] };

  componentDidMount() {
    const API_KEY = "AIzaSyCzBCE_cIVEImQjC5DEsznG_XTgnHfmGcA";
    YTSearch({ key: API_KEY, term: "developers" }, data => {
      console.log(data);
      this.setState({ video: data });
    });
  }

  renderVideos = () => {
    return this.state.videos.map(video => {
      return (
        <iframe
          key={video.id.videoId}
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
      );
    });
  };

  render() {
    return <>{this.state.videos && this.renderVideos()}</>;
  }
}

export default Video;
