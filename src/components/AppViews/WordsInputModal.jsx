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
      }]
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
    const newWords = this.state.newWords.slice() // TODO : ok ?
    newWords[k] = word
    this.setState({newWords})
    console.log('updateWordK', this.state);
  }

  render() {
    const props = this.props
    const state = this.state
    this.inputs = new Array(state.newWords.length) // TODO focus sur la 1ère colonne ? un attribut "focusOnRow"
    const columns = state.newWords.map((w,k) => {
      return <WordsInputColumn
                wordEntry={w}
                key={k}
                onChanges={this.updateWordK}
                ref={(input) => { this.inputs[k] = input; }}
              />
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
