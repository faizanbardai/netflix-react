import React, { Component } from 'react';
import { Card, CardImg, Col } from 'reactstrap';
class SingleMovie extends Component {
    state = {};
    componentDidMount = async () => {
        let URL = "http://www.omdbapi.com/?apikey=251ff3f5&i=".concat(this.props.movie);
        try {
            let response = await fetch(URL, {
                method: "GET"
            })
            if (response.ok) {
                this.setState(
                    {
                        movieObject: await response.json()
                    }
                )
                // return await response.json();
            }
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        console.log("Hello");
        if (this.state.movieObject) {
            var movie = this.state.movieObject
            console.log(movie.Title);
        }
        return (
            <Col xs="6" sm="3" md="2" className="px-0">
                {this.state.movieObject &&
                        <Card>
                            <CardImg top width="100%" src={movie.Poster} alt="Card image cap" />                            
                        </Card>
                    }
            </Col>
        );
    }
}





export default SingleMovie;