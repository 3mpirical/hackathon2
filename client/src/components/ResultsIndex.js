import React from "react";
import { Card, Grid, Divider } from "semantic-ui-react";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";

class Results extends React.Component {
  renderVideos = () => {
    const { videos } = this.props;
    console.log(this.props);

    return videos.map(video => (
      <Grid.Column width={7}>
        <Card fluid key={video.id}>
          <Card.Content fluid>
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
            <Link to={`/videos/${video.id}`}>
              <Card.Header>Title: {video.title}</Card.Header>
            </Link>
            <Card.Description>Description: {video.description}</Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    ));
  };

  render() {
    return (
      <Grid centered widths='equal'>
        <Grid.Row>
          {this.renderVideos()}
        </Grid.Row>
      </Grid>
    );
  }
}

export default Results;
