import React from 'react'
import axios from 'axios'
import Iframe from 'react-iframe'
import { Segment, Card, Icon, Comment, Header, Form } from 'semantic-ui-react'

class VideoShow extends React.Component {
    state = {
        comments: [
            { author: 'A Guy', body: 'Super cool app' },
            { author: 'Another Guy', body: 'Meh' },
            { author: 'Frank', body: 'Love it!' }
        ],
        video: {},
        likes: 220,
        dislikes: 0,
        author: '',
        body: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { author, body, comments } = this.state
        axios.post(`/api/videos/${this.props.match.params.id}/comments`, { author, body })
            .then(({ data }) => {
                this.setState({ comments: [{data}, ...comments], author: '', body: '' })
            })
    }

    handleLike = (e) => {
        this.setState({ likes: this.state.likes + 1 })
    }
    handleDislike = (e) => {
        this.setState({ dislikes: this.state.dislikes + 1 })
    }

    render() {
        const { author, body } = this.state
        return (
            <>
                <Segment style={{ height: '500px' }}>
                    <Iframe
                        width="100%"
                        height="100%"
                        id="myId"
                        title="youtube video"
                        url='http://www.youtube.com/embed/xDMP3i36naA'
                        fluid
                        className="myClassname"
                        display="initial"
                        position="relative"
                        allowFullScreen
                    />
                </Segment>
                <Card fluid>
                    <Card.Header textAlign='center'>Video name</Card.Header>
                    <Card.Header textAlign='center'>
                        <div>
                            <Icon name='thumbs up' onClick={this.handleLike} />
                            {this.state.likes}
                        </div>
                        <div>
                            <Icon name='thumbs down' onClick={this.handleDislike} />
                            {this.state.dislikes}
                        </div>
                    </Card.Header>
                    <Card.Meta textAlign='center'>Video Genre</Card.Meta>
                    <Card.Content textAlign='center'>Video Description</Card.Content>
                </Card>
                <Comment.Group>
                    <Header as='h3' dividing>
                        Comments
                    </Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group widths='equal'>
                            <Form.Input
                                name='author'
                                value={author}
                                autoFocus
                                label='Author'
                                placeholder='Author'
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                name='body'
                                value={body}
                                type='text'
                                autoFocus
                                label='Body'
                                placeholder='Body'
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Button type='submit'>Submit</Form.Button>
                    </Form>
                    {this.state.comments.map(comment => (
                        <Comment>
                            <Comment.Avatar src={require('../images/user.png')} />
                            <Comment.Content>
                                <Comment.Author>{comment.author}</Comment.Author>
                                <Comment.Metadata>
                                    <div>Today at 5:42PM</div>
                                </Comment.Metadata>
                                <Comment.Text>{comment.body}</Comment.Text>
                                <Comment.Actions>
                                    <Comment.Action>Reply</Comment.Action>
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                    ))}
                </Comment.Group>
            </>
        )
    }
}

export default VideoShow