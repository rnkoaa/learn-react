import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  //   constructor() {
  //       super();
  //       this.setState({ movies: getMovies() });
  //   }

  deleteMovies = movie => {
    const { movies } = this.state;
    const filterdMovies = movies.filter(m => m._id !== movie._id);
    this.setState({ movies: filterdMovies });
  };

  render() {
    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>{this.renderMovieRows()}</tbody>
      </table>
    );
  }

  renderMovieRows() {
    const { movies } = this.state;
    if (movies.length === 0) {
      return <h1>There are no movies</h1>;
    }
    return movies.map(movie => (
      <tr key={movie._id}>
        {
          <React.Fragment>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <button
                onClick={() => this.deleteMovies(movie)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </React.Fragment>
        }
      </tr>
    ));
  }
}

export default Movies;
