import React from "react";
import { Card, Grid, Divider } from "semantic-ui-react";
import Iframe from "react-iframe";
import { Link } from "react-router";

class Results extends React.Component {
  renderVideos = () => {
    const { videos } = this.props;
    console.log(this.props);

    return videos.map(video => (
      <Card fluid key={video.id}>
        <Card.Content>
          <Iframe
            width="100%"
            height="100%"
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
          <Card.Header>Title: {video.title}</Card.Header>
          <Card.Description>Description: {video.description}</Card.Description>
        </Card.Content>
      </Card>
    ));
  };

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width="7">{this.renderVideos()}</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Results;
