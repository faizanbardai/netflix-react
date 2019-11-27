import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';


const SingleComment = (props) => {
    console.log(props)
    let comment = props.comment;
    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
                {comment.comment}
                <span class="badge badge-primary badge-pill">{comment.rate}</span>
            </div>
            <footer class="blockquote-footer">
                by {comment.author} <Moment fromNow>{comment.createdAt}</Moment>
            </footer>
        </li>        
    )
}

export default SingleComment;