import InputMask        from 'react-input-mask'
import Modal            from 'cozy-ui/react/Modal'
import React            from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import WordsInputColumn from './WordsInputColumn'

class WordsInputModal extends React.Component {

  constructor(props){
    super(props)
    // props
    const {onChange} = props
    // dismissAction   // {this.hideWordsModal} 
    // primaryAction   // {this.saveNewWords}
    // secondaryAction // {this.hideWordsModal}
    // dismissAction   // {this.hideWordsModal}
    // state
    this.state = {
      newWords:[{
        word:'',
        hint:'',
        rule:'',
        date:''
      },{
        word:'',
        hint:'',
        rule:'',
        date:''
      },{
        word:'',
        hint:'',
        rule:'',
        date:''
      }],
      focusedCell:{col:0,row:0}
    }
  }

  dismissAction = () => {
    console.log("dismissAction")
    this.props.onHide()
  }


  saveNewWords = () => {
    console.log("saveNewWords", this.state.newWords)
    this.props.onHide()
  }

  updateWordK = (k,word) => {
    const newWords = this.state.newWords.slice()
    newWords[k] = word
    this.setState({newWords})
  }

  getRowForFocus = (colNumber) => {
    const cell = this.state.focusedCell
    if (cell.col !== colNumber) return undefined
    console.log('getRowForFocus', colNumber, cell.row)
    return cell.row
  }

  moveKeyHandler = (direction) => {
    console.log('moveKeyHandler', direction);
    const cell = this.state.focusedCell
    if (cell.row === 3) {
      this.setState({focusedCell:{row:0,col:cell.col+1}})
      return
    } else {
      console.log('new state', {row:cell.row+1,col:cell.col});
      this.setState({focusedCell:{row:cell.row+1,col:cell.col}})
    }
  }

  render() {
    const props = this.props
    const state = this.state
    // this.inputs = new Array(state.newWords.length)
    console.log('render modal');
    const columns = state.newWords.map((w,k) => {
      console.log('columns array', k);
      return (<WordsInputColumn
                wordEntry={w}
                key={k}
                k={k}
                onChanges={this.updateWordK}
                focusOnRow={this.getRowForFocus(k)}
                onMoveKey={this.moveKeyHandler}
              />)
    })

    return (
      <Modal
        title='Add new words to "Dictionnaire français"'
        dismissAction={this.dismissAction}
        size='xxlarge'
        into={'body'}
        primaryText='Add words'
        primaryType='regular'
        primaryAction={this.saveNewWords}
        secondaryText='Cancel'
        secondaryAction={this.dismissAction}
        dismissAction={this.dismissAction}
        overflowHidden={true}
      >
        <div className='WordsInputForm'>
          <div className='WordsInputForm-colsContainer'>
            {
              columns
            }
          </div>
        </div>
      </Modal>
    )
  }
}

export default WordsInputModal
