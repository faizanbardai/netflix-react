import React, { Component } from 'react';
import GETComments from '../API/GETComments';
import SingleComment from './SingleComment';
import WriteComment from './WriteComment'

class MovieComments extends Component {
    state = {
        loading: true
    }
    render() {
        if (this.state.loading) {
            return (
                <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        } else if (!this.state.loading && this.state.comments.length > 0) {
            return (
                <>
                    <ul className="list-group list-group-flush">
                        {this.state.comments.map((comment, index) => <SingleComment key={index} comment={comment} />)}
                    </ul>
                    <WriteComment />
                </>
            );
        } else return (
            <>
                <div class="alert alert-info" role="alert">
                    No comments available. Be the first one to comment.
                </div>
                <div>
                    <WriteComment />
    
                </div>
            </>
        )
            
    }
    componentDidMount = async () => {
        let comments = await GETComments(this.props.movieID);
        this.setState({
            comments: comments,
            loading: false
        })
    }
}

export default MovieComments;