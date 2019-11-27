import React, { Component } from 'react';
import POSTComment from '../API/POSTComment';

class WriteComment extends Component {
    render() {
        return (
            <form>
                <div class="form-group">
                    {/* <label for="comment">Example textarea</label> */}
                    <textarea
                        class="form-control mb-2"
                        id="comment"
                        rows="3"
                        placeholder="Write a new comment..."
                    >
                    </textarea>
                    <div class="input-group">
                        <select 
                            class="custom-select" 
                            id="inputGroupSelect04" 
                            aria-label="Example select with button addon">
                            <option selected>Rating</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                        </select>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default WriteComment;