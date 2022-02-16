import React, { Component } from 'react';

class Post extends Component {
    render() {
        const {title, id} = this.props.data
        return (
            <div>
                <p>{id}</p>
                <p>{title}</p>
            </div>
        );
    }
}

export default Post;