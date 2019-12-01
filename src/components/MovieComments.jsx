import React from 'react';
import SingleComment from './SingleComment';

const MovieComments = (props) => {
    let { comments, deleteComment } = props;
    return (
        <>
            {comments.length === 0 ?
                <div className="alert alert-info" role="alert">
                    No comments available. Be the first one to comment.
                    </div>
                :
                <ul className="list-group list-group-flush">
                    {comments.map((comment) =>
                        <SingleComment
                            key={comment._id}
                            comment={comment}
                            deleteComment={deleteComment}
                        />)
                    }
                </ul>
            }
        </>
    );
}


export default MovieComments;