import React, { Component } from 'react';
import { getGenres } from '../services/fakeGenreService';

class Genres extends Component {
  state = {
    selectedGenre: {},
    genres: getGenres()
  };

  getClasses = genre => {
    console.log("Get Classes: ", genre);
    let classes = 'list-group-item';
    if (
      this.state.selectedGenre._id &&
      this.state.selectedGenre._id === genre._id
    ) {
      classes += ' active';
    }
    return classes;
  };
  render() {
    const { selectedGenre } = this.state;

    return (
      <ul className="list-group">
        <li
          style={{ cursor: 'pointer' }}
          className="list-group-item active"
          onClick={() =>
            this.props.genreClicked({
              _id: 'all'
            })
          }
        >
          All Genres
        </li>
        {this.state.genres.map(genre => {
          return (
            <li
              style={{ cursor: 'pointer' }}
              onClick={() => this.props.genreClicked(genre)}
              key={genre._id}
              className={this.getClasses(genre)}
            >
              {genre.name}
            </li>
          );
        })}
        {/* <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li> */}
      </ul>
    );
  }
}

export default Genres;
