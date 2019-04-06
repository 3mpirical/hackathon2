import React from "react";
import YTSearch from "youtube-api-search";
import { Card, Grid, Divider } from "semantic-ui-react";
import Iframe from "react-iframe";

class Video extends React.Component {
  state = { videos: [] };

  componentDidMount() {
    const API_KEY = "AIzaSyCzBCE_cIVEImQjC5DEsznG_XTgnHfmGcA";
    YTSearch({ key: API_KEY, term: "developers" }, data => {
      this.setState({ videos: data });
    });

    // axios.get("/api/videos").then(res => {
    //   this.setState({ videos: res.data });
    // });
  }

  renderVideos = () => {
    const { videos } = this.state;
    console.log(this.state.videos);

    return videos.map(video => (
      <Card fluid key={video.id.videoId}>
        <Card.Content>
          <Iframe
            width="450px"
            height="450px"
            id="myId"
            title="youtube video"
            url={`https://www.youtube.com/embed/${video.id.videoId}`}
            fluid
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen
          />
          <Divider />
          <Card.Header>{video.snippet.title}</Card.Header>
          {/* <Card.Meta>
            <span>{video.duration}</span>
          </Card.Meta> */}
          <Card.Description>{video.snippet.description}</Card.Description>
        </Card.Content>
        {/* <Card.Content extra>{video.genre}</Card.Content> */}
      </Card>
    ));
  };

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width="7">
            {this.state.videos.length > 0 && this.renderVideos()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Video;
