import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
class Pagination extends Component {
  render() {
    const { itemsCount, pageSize, currentPage, onPageChanged } = this.props;

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
            {pages.map(page => {
              return (
                <li
                  key={page}
                  className={
                    page === currentPage ? 'page-item active' : 'page-item'
                  }
                >
                  <a className="page-link" onClick={() => onPageChanged(page)}>
                    {page}
                  </a>
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

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func.isRequired
};
export default Pagination;
