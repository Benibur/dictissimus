import React            from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import InputMask        from 'react-input-mask'


export class WordsInputColumn extends React.Component{

  constructor(props){
    super(props)
    // props
    // const {initialWordEntry, key, onChanges} = props
    // state
    // this.state = {
    //   wordEntry:props.wordEntry
    // }
    // bindings
    this.wordChangeHandler = this.wordChangeHandler.bind(this)
  }

  wordChangeHandler = (e) => {
    const newWord = Object.assign({}, this.props.wordEntry)
    newWord.word = e.target.value
    this.props.onChanges(this.props.key, newWord)
  }

  hintChangeHandler = (e) => {
    const newWord = Object.assign({}, this.props.wordEntry)
    newWord.hint = e.target.value
    this.props.onChanges(this.props.key, newWord)
  }

  ruleChangeHandler = (e) => {
    const newWord = Object.assign({}, this.props.wordEntry)
    newWord.rule = e.target.value
    this.props.onChanges(this.props.key, newWord)
  }

   // TODO : un handler par event d'input ?? qui appelle le handler du parent qui met à jours les props qui déclenche un render ?
  dateChangeHandler = (e) => {
    const newWord = Object.assign({}, this.props.wordEntry)
    newWord.date = e.target.value
    this.props.onChanges(this.props.key, newWord)
  }

  render () {
    const {word, rule, hint, date} = this.props.wordEntry
    return (
      <div className='WordsInputForm-wordCol'>
        <input placeholder='Word' value={word}
          onChange={this.wordChangeHandler} />
        <TextareaAutosize placeholder='Hint' value={hint}
           onChange={this.hintChangeHandler} />
        <TextareaAutosize placeholder='Rule' value={rule}
           onChange={this.ruleChangeHandler} />
        <InputMask
          placeholder='Dictation date'
          mask="99/99/9999"
          maskChar="_"
          value={date}
          onChange={this.dateChangeHandler} />
      </div>
    )
  }
}

export default WordsInputColumn
