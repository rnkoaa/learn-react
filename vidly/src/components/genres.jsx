import React, { Component } from 'react';
import { getGenres } from '../services/fakeGenreService';

class Genres extends Component {
  state = {
    genres: getGenres()
  };
  render() {
    return (
      <ul className="list-group">
        <li styles={{ cursor: pointer }} className="list-group-item active">All Genres</li>
        {this.state.genres.map(genre => {
          return <li key={genre._id} className="list-group-item">{genre.name}</li>;
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
