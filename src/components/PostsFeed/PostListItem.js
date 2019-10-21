import React from 'react';

import '../../css/main.css';

const PostListItem = props => {
    return (
        <div className="post-card">
            <div className="votes-container">
                <a className="upvote-icon" href="#">
                    <img src={require('../../resources/upvote-icon.svg')} alt="Upvote"></img>
                </a>
                <div className="post-score">
                    <p>{props.data.score}</p>
                </div>
                <a className="downvote-icon" href="#">
                    <img src={require('../../resources/downvote-icon.svg')} alt="Downvote"></img>
                </a>
            </div>    
            <div className="post-container">
                <div className="subreddit-container">
                    <img className="subreddit-thumbnail" src={props.data.thumbnail} alt=""></img>
                    <h4 className="subreddit-name">{props.data.subreddit_name_prefixed}</h4>
                    &nbsp;•&nbsp;
                    <h5 className="post-details">
                        {`Posted by ${props.data.author} ${new Date(new Date() - new Date(props.data.created_utc))}`}
                    </h5>
                </div>
                <div className="post-content">
                    <h3 className="content-title">{props.data.title}</h3>
                    <a className="content-link" href={props.data.url} target="_blank">
                        {props.data.url}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PostListItem;