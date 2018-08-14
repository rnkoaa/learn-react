import React, { Component } from "react";
import TableHeader from "./table-header";
import _ from "lodash";

class Table extends Component {
  state = {
    columns: [],
    data: [],
    sortedColumn: {},
    sortable: false,
    paged: false
  };

  componentDidMount() {
    console.log("Component Did Mount: ", this.props.data);
    const { data, columns } = this.props;
    this.setState({
      data,
      columns
    });
  }

  onSort = column => {
    if (column.sortable) {
      //   console.log("Column is Sortable.");
      const { dataPath } = column;

      const sortedData = _.orderBy(this.state.data, [dataPath], ["asc"]);
      console.log("Sorted Data: ", sortedData);
    }
  };


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

  renderCell(item, column) {
    if (column.content) {
      return column.content(item);
    }
    return _.get(item, column.dataPath);
  }

  render() {
    const { data, columns } = this.state;
    const { rowKeyProperty } = this.props;
    return (
      <table className="table table-bordered table-striped">
        <TableHeader columns={columns} sortedColumn={this.state.sortedColumn} onSort={this.onSort}>
          {" "}
        </TableHeader>
        <tbody>
          {data.map(item => {
            return (
              <tr key={item[rowKeyProperty]}>
                {columns.map(column => {
                  return <td key={column.key + item[rowKeyProperty]}>{this.renderCell(item, column)}</td>;
                })}
              </tr> 
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
