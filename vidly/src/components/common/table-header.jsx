import React, { Component } from "react";

class TableHeader extends Component {
  state = {};

  // sortMovies = sortProperty => {
  //   const sortColumn = { ...this.state.sortColumn };
  //   if (sortColumn.property === sortProperty) {
  //     sortColumn.sortOrder = sortColumn.sortOrder === "asc" ? "desc" : "asc";
  //   } else {
  //     sortColumn.property = sortProperty;
  //     sortColumn.sortOrder = "asc";
  //   }
  //   this.setState({
  //     sortColumn
  //   });
  // };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map(column => {
            return (
              <th scope="col" key={column.dataPath || column.key} onClick={() => this.props.onSort(column)}>
                {column.label}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
