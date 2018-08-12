import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
  render() {
    const { itemsCount, pageSize } = this.props;

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) {
        return null;
    }
    const pages = _.range(1, pagesCount + 1);
    return (
      <React.Fragment>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            {/* <li className="page-item">
              <a className="page-link">1</a>
            </li>
            <li className="page-item">
              <a className="page-link">2</a>
            </li>
            <li className="page-item">
              <a className="page-link">3</a>
            </li> */}
            {pages.map(page => {
              return (
                <li key={page} className="page-item">
                  <a className="page-link">{page}</a>
                </li>
              );
            })}
            <li className="page-item">
              <a className="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Pagination;
