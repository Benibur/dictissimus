import React  from 'react'
import Button from 'cozy-ui/react/Button'
import Icon   from 'cozy-ui/react/Icon'
import moment from 'moment'

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
    const { dico } = this.props;
    const { widths } = this.state;
    console.log(dico);
    dico.map

    return (
      <div className='dicoTable'>
        <div className='dicoTableHeader'>
          <div style={{display:'inline-block'}} className='col_date'>Date</div>
          <div style={{display:'inline-block'}} className='col_score'>Score</div>
          <div style={{display:'inline-block'}} className='col_word'>Word</div>
          <div style={{display:'inline-block'}} className='col_hint'>Hints</div>
          <div style={{display:'inline-block'}} className='col_rule'>Rules
            <Button theme='regular' size='tiny' onClick={()=>this.setState({ modalDisplayed: !this.state.modalDisplayed })}>
              <Icon icon='plus' color='white'/>
              {'Add new words'}
            </Button>
          </div>
        </div>
        <div className='dicoTableRowsContainer'>
          {dico.map((word) =>
            <div className='dicoTableRow'>
              <div style={{display:'inline-block'}} className='col_date'>{moment(word.weekDictation).format('DD-MM-YYYY')}</div>
              <div style={{display:'inline-block'}} className='col_score'>12/16</div>
              <div style={{display:'inline-block'}} className='col_word'>{word.word}</div>
              <div style={{display:'inline-block'}} className='col_hint'>{word.hint}</div>
              <div style={{display:'inline-block'}} className='col_rule'>{word.rule}</div>
            </div>)}
        </div>
      </div>
    );
  }

}

export default DicoTable


/*
    working table based on react-virtualized, kept for when long tables will be required
    pour dimensionner le tableau utiliser autosizer :
    https://github.com/bvaughn/react-virtualized
    https://github.com/bvaughn/react-virtualized/blob/master/source/Grid/Grid.example.js
    https://github.com/bvaughn/react-virtualized/blob/master/docs/AutoSizer.md

 */
// import { div //
// export class DicoTable extends React.Component {
//   state = {
//     widths: {
//       ddate: 0.14,
//       score: 0.1,
//       word : 0.2,
//       hints: 0.28,
//       rules: 0.28,
//     }
//   };
//
//   render() {
//     const { list } = this.props;
//     const { widths } = this.state;
//
//     return (
//       <Table
//         width={TOTAL_WIDTH}
//         height={400}
//         headerHeight={20}
//         rowHeight={30}
//         rowCount={list.length}
//         rowGetter={({ index }) => list[index]}
//       >
//         <Column
//           headerRenderer={this.headerRenderer}
//           dataKey="ddate"
//           label="Date"
//           width={widths.ddate * TOTAL_WIDTH}
//         />
//         <Column
//           dataKey="score"
//           label=""
//           width={widths.score * TOTAL_WIDTH}
//         />
//         <Column
//           headerRenderer={this.headerRenderer}
//           dataKey="word"
//           label="Word"
//           width={widths.word * TOTAL_WIDTH}
//         />
//         <Column
//           dataKey="hints"
//           label="Hints"
//           width={widths.hints * TOTAL_WIDTH}
//         />
//         <Column
//           dataKey="rules"
//           label="Rules"
//           width={widths.rules * TOTAL_WIDTH}
//         />
//       </Table>
//     );
//   }
//
//   headerRenderer = ({
//     columnData,
//     dataKey,
//     disableSort,
//     label,
//     sortBy,
//     sortDirection
//   }) => {
//     return (
//       <React.Fragment key={dataKey}>
//         <div className="ReactVirtualized__Table__headerTruncatedText">
//           {label}
//         </div>
//       </React.Fragment>
//     );
//   };
// }
