import React from 'react'
import { Column, Table } from "react-virtualized";

// https://github.com/bvaughn/react-virtualized
// https://github.com/bvaughn/react-virtualized/blob/master/source/Grid/Grid.example.js

const TOTAL_WIDTH = 800;

export class DicoTable extends React.Component {
  state = {
    widths: {
      ddate: 0.14,
      score: 0.1,
      word : 0.2,
      hints: 0.28,
      rules: 0.28,
    }
  };

  render() {
    const { list } = this.props;
    const { widths } = this.state;

    return (
      <Table
        width={TOTAL_WIDTH}
        height={400}
        headerHeight={20}
        rowHeight={30}
        rowCount={list.length}
        rowGetter={({ index }) => list[index]}
      >
        <Column
          headerRenderer={this.headerRenderer}
          dataKey="ddate"
          label="Date"
          width={widths.ddate * TOTAL_WIDTH}
        />
        <Column
          dataKey="score"
          label=""
          width={widths.score * TOTAL_WIDTH}
        />
        <Column
          headerRenderer={this.headerRenderer}
          dataKey="word"
          label="Word"
          width={widths.word * TOTAL_WIDTH}
        />
        <Column
          dataKey="hints"
          label="Hints"
          width={widths.hints * TOTAL_WIDTH}
        />
        <Column
          dataKey="rules"
          label="Rules"
          width={widths.rules * TOTAL_WIDTH}
        />
      </Table>
    );
  }

  headerRenderer = ({
    columnData,
    dataKey,
    disableSort,
    label,
    sortBy,
    sortDirection
  }) => {
    return (
      <React.Fragment key={dataKey}>
        <div className="ReactVirtualized__Table__headerTruncatedText">
          {label}
        </div>
      </React.Fragment>
    );
  };
}

export default DicoTable
