import React, { Component } from "react";
import Like from "./common/like";
import Genres from "./genres";
import Pagination from "./common/pagination";
import Table from "./common/table";
import { paginate } from "../utils/paginate";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
// import _ from "lodash";

class Movies extends Component {
  state = {
    pageSize: 4,
    currentPage: 1,
    movies: [],
    selectedMovies: [],
    columns: [
      {
        label: "Title",
        dataPath: "title",
        key: "title",
        sortable: true
      },
      {
        label: "Genre",
        dataPath: "genre.name",
        key: "genre.name",
        sortable: true
      },
      {
        label: "Stock",
        dataPath: "numberInStock",
        key: "numberInStock",
        sortable: true
      },
      {
        label: "Rate",
        dataPath: "dailyRentalRate",
        key: "dailyRentalRate",
        sortable: true
      },
      {
        label: "",
        key: "like",
        content: (movie) => <Like liked={movie.liked} onClick={() => this.props.clickLike(movie)} />,
        sortable: false
      },
      {
        label: "",
        key: "delete",
        content: (movie) => 
          <button onClick={() => this.props.deleteMovies(movie)} className="btn btn-danger btn-sm">
            Delete
          </button>
        ,
        sortable: false
      }
    ],
    sortColumn: { property: "title", sortOrder: "asc" },
    selectedGenre: { name: "All", _id: "all" },
    genres: []
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      selectedMovies: getMovies(),
      genres: [{ name: "All", _id: "all" }, ...getGenres()]
    });
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

  selectMoviesByGenre = genre => {
    if (genre._id === "all") {
      const movies = [...this.state.movies];
      this.setState({
        selectedGenre: genre,
        currentPage: 1,
        selectedMovies: movies
      });
    } else {
      const movies = [...this.state.movies];
      const genreMovies = movies.filter(m => m.genre._id === genre._id);
      this.setState({
        selectedGenre: genre,
        currentPage: 1,
        selectedMovies: genreMovies
      });
    }
  };

  sortMovies = sortProperty => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.property === sortProperty) {
      sortColumn.sortOrder = sortColumn.sortOrder === "asc" ? "desc" : "asc";
    } else {
      sortColumn.property = sortProperty;
      sortColumn.sortOrder = "asc";
    }
    this.setState({
      sortColumn
    });
  };

  handlePageChange = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { length: count } = this.state.selectedMovies;
    const { pageSize, currentPage } = this.state;

    if (count === 0) return <p> There are no movies in the database </p>;

    // const sortedMovies = _.orderBy(
    //   this.state.selectedMovies,
    //   [this.state.sortColumn.property],
    //   [this.state.sortColumn.sortOrder]
    // );

    const selectedMovies = paginate(this.state.selectedMovies, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <Genres selectedGenre={this.state.selectedGenre} onItemSelected={this.selectMoviesByGenre} />
        </div>
        <div className="col">
          <p> There are {this.state.selectedMovies.length} Movies in the database</p>
          <Table
            rowKeyProperty={"_id"}
            data={selectedMovies}
            columns={this.state.columns}
            onSort={this.onSort}
          />
          {/* <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col" />
              </tr>
            </thead>
            <tbody>{this.renderMovieRows(selectedMovies)}</tbody>
    </table> */}
          <Pagination
            itemsCount={this.state.selectedMovies.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChanged={this.handlePageChange}
          />
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
            <td>
              <Like liked={movie.liked} onClick={() => this.clickLike(movie)} />
            </td>
            <td>
              <button onClick={() => this.deleteMovies(movie)} className="btn btn-danger btn-sm">
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
