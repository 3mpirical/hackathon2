import React from "react";
import { Card, Grid, Divider } from "semantic-ui-react";
import Iframe from "react-iframe";

class Results extends React.Component {

  renderVideos = () => {
    const { videos } = this.props;
    console.log(this.props);

    return videos.map(video => (
      <Card fluid key={video.id}>
        <Card.Content>
          <Iframe
            width="450px"
            height="450px"
            id="myId"
            title="youtube video"
            url={video.url}
            fluid
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen
          />
          <Divider />
          <Card.Header>{video.title}</Card.Header>
          <Card.Description>{video.description}</Card.Description>
        </Card.Content>
      </Card>
    ));
  };

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width="7">
            {this.renderVideos()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Results;