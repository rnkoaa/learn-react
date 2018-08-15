import React, { Component } from "react";

class TableHeader extends Component {
  state = {};

  renderSortIcon = column => {
    if (column.sortable) {
      const { sort } = this.props;
      if (column.dataPath !== sort.property) {
        return null;
      }

      if (sort.order === "asc") {
        return <i className="fa fa-sort-asc" />;
      }
      console.log(`Rendering ${column.dataPath} with order: ${sort.order}`);
      return <i className="fa fa-sort-desc" />;
    }
    return null;
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map(column => {
            return (
              <th
                scope="col"
                key={column.dataPath || column.key}
                onClick={() => this.props.onSort(column.dataPath)}
              >
                {column.label} {this.renderSortIcon(column)}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
