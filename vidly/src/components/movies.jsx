import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate'


class Movies extends Component {
  state = {
    pageSize: 4,
    currentPage: 1,
    movies: getMovies()
  };

  deleteMovies = movie => {
    const { movies } = this.state;
    const filterdMovies = movies.filter(m => m._id !== movie._id);
    this.setState({ movies: filterdMovies });
  };

  clickLike = movie => {
    const movies = [...this.state.movies];
    const clonedMovie = { ...movie };
    const idx = movies.indexOf(movie);
    clonedMovie.liked = !movie.liked;
    movies[idx] = clonedMovie;
    this.setState({ movies });
  };

  handlePageChange = pageNumber => {
    this.setState({currentPage: pageNumber});
  }

  render() {
    const {length: count} = this.state.movies;
    const {pageSize, currentPage} = this.state;

    if(count === 0) return <p> There are no movies in the database </p>

    const movies = paginate(this.state.movies,  currentPage, pageSize) ;
    return (
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col" />
              <th scope="col" />
            </tr>
          </thead>
          <tbody>{this.renderMovieRows(movies)}</tbody>
        </table>
        <Pagination itemsCount={this.state.movies.length}
        pageSize={this.state.pageSize}
        currentPage={this.state.currentPage}
        onPageChanged={this.handlePageChange} />
      </div>
    );
  }

  renderMovieRows(movies) {
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
              <Like liked={movie.liked} onClick={() => this.clickLike(movie)} />
            </td>
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
