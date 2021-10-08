import React, { Component } from 'react';

class Post extends Component {
    render() {
        const { body, title} = this.props
        return (
            <div style={{border:"2px black solid", margin:"20px", padding: "0px 10px", borderRadius:"20px"}}>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        );
    }
}

export default Post;