import React, { Component } from 'react';
import Like from './common/like';
import Genres from "./genres";
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate'
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';


class Movies extends Component {
  state = {
    pageSize: 4,
    currentPage: 1,
    movies: [],
    selectedMovies: [],
    selectedGenre: {name: "All", _id: "all"},
    genres: []
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      selectedMovies: getMovies(),
      genres: [{name: "All", _id: "all"}, ...getGenres()]
    })
  }

  deleteMovies = movie => {
    const { movies } = this.state;
    const filteredMovies = movies.filter(m => m._id !== movie._id);
    this.setState({ movies: filteredMovies });
  };

  clickLike = movie => {
    const movies = [...this.state.movies];
    const clonedMovie = { ...movie };
    const idx = movies.indexOf(movie);
    clonedMovie.liked = !movie.liked;
    movies[idx] = clonedMovie;
    this.setState({ movies });
  };

  selectMoviesByGenre = (genre) => {
    if (genre._id === "all") {
      const movies = [...this.state.movies]
      this.setState({
        selectedGenre: genre,
        currentPage: 1,
        selectedMovies: movies
      })
    } else {
      const movies = [...this.state.movies]
      const genreMovies = movies.filter(m => m.genre._id === genre._id);
      this.setState({
        selectedGenre: genre,
        currentPage: 1,
        selectedMovies: genreMovies
      })
    }
  }

  handlePageChange = pageNumber => {
    this.setState({currentPage: pageNumber});
  }

  render() {
    const {length: count} = this.state.selectedMovies;
    const {pageSize, currentPage} = this.state;

    if(count === 0) return <p> There are no movies in the database </p>

    const selectedMovies = paginate(this.state.selectedMovies,  currentPage, pageSize) ;
    return (
      <div className="row">
        <div className="col-2">
          <Genres selectedGenre={this.state.selectedGenre} onItemSelected = {this.selectMoviesByGenre} />
        </div>
        <div className="col">
          <p> There are {this.state.selectedMovies.length} Movies in the database</p>
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
            <tbody>{this.renderMovieRows(selectedMovies)}</tbody>
          </table>
          <Pagination itemsCount={this.state.selectedMovies.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChanged={this.handlePageChange} />
        </div>
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
