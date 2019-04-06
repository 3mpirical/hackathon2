import React from 'react'

class Video extends React.Component {
    state = { videos: [] }

    componentDidMount() {
        axios.get('/api/videos')
            .then(res => {
                this.setState({ videos: res.data })
            })
    }

    renderVideos = () => {
        const { videos } = this.state

        videos.map(video => (
            <Card fluid>
                <Card.Content>
                    <Iframe url={}
                        width="450px"
                        height="450px"
                        id="myId"
                        fluid
                        className="myClassname"
                        display="initial"
                        position="relative"
                        allowFullScreen />
                    <Divider />
                    <Card.Header>{video.name}</Card.Header>
                    <Card.Meta>
                        <span>{video.duration}</span>
                    </Card.Meta>
                    <Card.Description>{video.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    {video.genre}
                </Card.Content>
            </Card>
        ))
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={7}>
                        {this.renderVideos}

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
