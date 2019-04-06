import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid } from 'semantic-ui-react'
// import { Video } from "video";
// import Iframe from 'react-iframe'

class Home extends React.Component {
  state = {
    loaded: false
  };

  // componentDidMount() {
  //   const { video } = this.props;
  //   this.setState({
  //     loaded: true
  //   });
  // }

  render() {
    let { videos } = this.props;
    let topVideo;

    if (videos.length > 0) {
      topVideo = {
        id: videos[0].id,
        url: videos[0].url,
        title: videos[0].title,
        description: videos[0].description,
        genre: videos[0].description,
        duration: videos[0].description
      };
    }

    return (
      <HomeContainer>
        <h1>All Videos</h1>
        <MainContainer>
          {videos.length > 0 ? (
            <>
              <TopVideo src={videos[0].url}>
                <Link to={`/videos/${videos[0].id}`}>
                  <h3 className="video-title">{videos[0].title}</h3>
                </Link>
              </TopVideo>
            </>
          ) : null}
        </MainContainer>
        <MainBody>
          {videos.length > 4 ? (
            <>
              {videos.map(video => (
                <>
                  <BodyVideo src={video.url} key={video.id} />
                  <Link to={`/videos/${video.id}`}>{video.title}</Link>
                  <p>{video.description}</p>
                </>
              ))}
            </>
          ) : null}
        </MainBody>
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  height: 100%;
  min-height: calc(100vh - 100px);
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 150px;
  h1 {
    font-size: 25px;
    font-weight: lighter;
    padding-bottom: 50px;
  }
`;

const MainBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 50px 0;
`;

const BodyVideo = styled.iframe`
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .video {
    width: 100%;
    height: 100%;
    max-height: 175px;
  }
  p {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.7);
    padding: 10px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const TopVideo = styled.iframe`
  flex: 1;
  padding: 0 10px;
  .video-title {
    color: rgba(0, 0, 0, 0.7);
    padding-top: 10px;
    font-weight: lighter;
  }
  .first-video {
    width: 600px;
  }
`;

const Video = styled.div`
  .video {
    width: 100%;
    height: 100%;
    max-height: 150px;
  }
  p {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.7);
    padding: 10px;
  }
`;

export default Home;
