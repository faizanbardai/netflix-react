import React from 'react';

const SingleComment = (props) => {
    console.log(props)
    let comment = props.comment;
    return (
        
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {comment.comment}
            <span class="badge badge-primary badge-pill">{comment.rate}</span>
        </li>
    )
}

export default SingleComment;