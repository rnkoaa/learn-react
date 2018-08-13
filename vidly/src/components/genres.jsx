import React, { Component } from 'react';
import { getGenres } from '../services/fakeGenreService';

class Genres extends Component {
  state = {
    genres: [{name: "All", _id: "all"}, ...getGenres()]
  };

  render() {
    const {selectedGenre} = this.props;
    return (
      <ul className="list-group">
        {this.state.genres.map(genre => {
          return (
            <li
              style={{ cursor: 'pointer' }}
              onClick={() => this.props.onItemSelected(genre)}
              key={genre._id}
              className={selectedGenre && selectedGenre._id === genre._id ? "list-group-item active" : "list-group-item" }
            >
              {genre.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Genres;
