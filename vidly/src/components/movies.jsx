import React, { Component } from "react";
import Like from "./common/like";
import Genres from "./genres";
import Pagination from "./common/pagination";
import Table from "./common/table";
import { paginate } from "../utils/paginate";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
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
        content: movie => <Like liked={movie.liked} onClick={() => this.clickLike(movie)} />,
        sortable: false
      },
      {
        label: "",
        key: "delete",
        content: movie => (
          <button onClick={() => this.onMovieDelete(movie)} className="btn btn-danger btn-sm">
            Delete
          </button>
        ),
        sortable: false
      }
    ],
    sort: { property: "title", order: "asc" },
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

  componentDidUpdate(prevProps, prevState) {
    // const {sort: prevStateSort} = prevState.sort;
    
  }

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

  onSort = sortProperty => {
    const sort = { ...this.state.sort };
    if (sort.property === sortProperty) {
      sort.order = sort.order === "asc" ? "desc" : "asc";
    } else {
      sort.property = sortProperty;
      sort.order = "asc";
    }
    console.log("OnSort: Column clicked ", sort);
    this.setState({
      sort
    });
  };

  handlePageChange = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  onMovieDelete = movie => {
    const { selectedMovies } = this.state;
    const filteredMovies = selectedMovies.filter(m => m._id !== movie._id);
    this.setState({ selectedMovies: filteredMovies });
  };

  render() {
    const { sort, pageSize, currentPage } = this.state;
    const { length: count } = this.state.selectedMovies;

    if (count === 0) return <p> There are no movies in the database </p>;

    const sortedMovies = _.orderBy(
      this.state.selectedMovies,
      [sort.property],
      [sort.order]
    );

    const selectedMovies = paginate(sortedMovies, currentPage, pageSize);
    console.log(selectedMovies)
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
            sort={sort}
            columns={this.state.columns}
            onSort={this.onSort}
            onMovieDelete={this.onMovieDelete}
          />
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
}

export default Movies;
