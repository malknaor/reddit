import React from 'react';

import reddit from '../API/reddit';
import PostItem from './PostItem';
import '../../css/main.css';

class Posts extends React.Component {
    state = { posts: [], error: '' }

    componentDidUpdate() {
        this.renderPosts();
    }

    componentDidMount() {
        reddit.get(this.props.path)
            .then(res => this.setState({ ...this.state, posts: res.data.data.children }))
            .catch(err => this.setState({ ...this.state, error: err.message }));
    }

    renderPosts = () => {
        if (this.state.posts.length > 0 && this.state.error === '') {
            return (
                <div className="posts-list">
                    {this.state.posts.map((current, index) => <PostItem data={current.data} key={index} />)}
                </div>
            );
        } else {
            return <div>Loading</div>;
        }
    }

    render() {
        return (
            <div className="posts-container">
                <h2 className="posts-title">{this.props.title}</h2>
                {this.renderPosts()}
            </div>
        );
    }
}

export default Posts;