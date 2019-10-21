import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
// import reddit from '../API/reddit';
import PostListItem from './PostListItem';
import '../../css/main.css';

class PostsList extends React.Component {
    componentDidUpdate() {
        this.renderPosts();
    }

    renderPosts = () => {
        if (this.props.posts.length > 0) {
            return (
                <div className="posts-list">
                    {this.props.posts.map((current, index) => <PostListItem data={current.data} key={index} />)}
                </div>
            );
        } 

        return (
            <div className="posts-loading">
                <div className="loading-label">
                    Loading...
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchPosts(this.props.path);
    }

    render() {
        console.log(this.props);

        return (
            <div className="posts-container">
                <h2 className="posts-title">{this.props.title}</h2>
                {this.renderPosts()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostsList);