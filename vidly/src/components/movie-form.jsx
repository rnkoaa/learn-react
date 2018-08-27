import React from "react";
import Form from "./common/forms";

import { getMovie } from "../services/fakeMovieService";

// const MovieForm = ({match, history}) => {
//     return ( <div>
//         <h1>Movie Form {match.params.id}</h1>
//         <button className="btn btn-primary" onClick={() => history.push("/movies") }>Save</button>
//     </div>  );
// }

class MovieForm extends Form {
  state = {
    data: {
        title: "",
        rating: 0,
        numberInStock: 0,
        genreId: 0,
    },
    errors: {}
  };

  componentDidMount() {
    const { match } = this.props;
    const movieId = match.params.id;
    if(movieId) {
        console.log("Movie Id: ", movieId);
    }

  }

  render() {
    const { match, history } = this.props;
    const {data, errors} = this.state;
    return (
        <form onSubmit={this.onSubmit}>
            <h1>Movie Form {match.params.id}</h1>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={data.title}
              onChange={this.onValueChange}
              className="form-control"
              id="title"
              name="title"
              aria-describedby="title"
              placeholder="Enter Title of Movie"
            />
            {errors.title && (
              <small id="titleHelp" className="form-text text-muted alert alert-danger">
                {errors.title}
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="rating">Movie Rating</label>
            <input
              type="text"
              value={data.rating}
              onChange={this.onValueChange}
              className="form-control"
              id="rating"
              name="rating"
              aria-describedby="ratingHelp"
              placeholder="Rating"
            />
            {errors.rating && (
              <small id="ratingHelp" className="form-text text-muted alert alert-danger">
                {errors.rating}
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="genreId">Genre</label>
            <input
              value={data.genreId}
              type="text"
              name="genreId"
              onChange={this.onValueChange}
              className="form-control"
              id="genreId"
              placeholder="Genre Id"
            />
            {errors.genreId && (
              <small id="genreIdHelp" className="form-text text-muted alert alert-danger">
                {errors.genreId}
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="numberInStock">Number in Stock</label>
            <input
              value={data.numberInStock}
              type="text"
              name="numberInStock"
              onChange={this.onValueChange}
              className="form-control"
              id="numberInStock"
              placeholder="How Many in Stock"
            />
            {errors.genreId && (
              <small id="genreIdHelp" className="form-text text-muted alert alert-danger">
                {errors.genreId}
              </small>
            )}
          </div>
        <button className="btn btn-primary" onClick={() => history.push("/movies")}>
          Save
        </button>
      </form>
    );
  }
}

export default MovieForm;
