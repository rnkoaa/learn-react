import React, { Component } from "react";
import TableHeader from "./table-header";
import _ from "lodash";

class Table extends Component {
  state = {
    columns: [],
    data: [],
    sort: {},
    sortable: false,
    paged: false
  };

  componentDidMount() {
    const { data, columns, sort } = this.props;
    this.setState({
      data,
      columns,
      sort
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      const { data, columns, sort } = this.props;
      this.setState({
        data,
        columns,
        sort
      });
    }
  }

  renderCell(item, column) {
    if (column.content) {
      return column.content(item);
    }
    return _.get(item, column.dataPath);
  }

  render() {
    const { data, columns, sort } = this.state;
    const { rowKeyProperty } = this.props;

    return (
      <table className="table table-bordered table-striped">
        <TableHeader columns={columns} sort={sort} onSort={this.props.onSort} />
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
