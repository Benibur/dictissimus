import React            from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import InputMask        from 'react-input-mask'


export class WordsInputColumn extends React.Component{

  constructor(props){
    super(props)
    // props
    // const {wordEntry, k, onChanges, focusOnRow} = props
    // state
    // this.state = {
    //   wordEntry:props.wordEntry
    // }
    // bindings
    this.wordChangeHandler = this.wordChangeHandler.bind(this)
    // internals
    // this.rowElements = new Array(4)
    this.el = undefined
  }

  wordChangeHandler = (e) => {
    const newWord = Object.assign({}, this.props.wordEntry)
    newWord.word = e.target.value
    this.props.onChanges(this.props.k, newWord)
  }

  hintChangeHandler = (e) => {
    const newWord = Object.assign({}, this.props.wordEntry)
    newWord.hint = e.target.value
    this.props.onChanges(this.props.k, newWord)
  }

  ruleChangeHandler = (e) => {
    const newWord = Object.assign({}, this.props.wordEntry)
    newWord.rule = e.target.value
    this.props.onChanges(this.props.k, newWord)
  }

   // TODO : un handler par event d'input ?? qui appelle le handler du parent qui met à jours les props qui déclenche un render ?
  dateChangeHandler = (e) => {
    const newWord = Object.assign({}, this.props.wordEntry)
    newWord.date = e.target.value
    this.props.onChanges(this.props.k, newWord)
  }

  inputHandler = (evt) => {
    console.log('keyPress', evt.key, this.getLineNumber(evt.target));

    switch (evt.key) {
      case 'ArrowDown':
        cursorLine(evt.target) ==
        this.props.onMoveKey('down')
        break
      case 'ArrowUp':
        this.props.onMoveKey('up')
        break
      case 'ArrowRight':
        this.props.onMoveKey('right')
        break
      case 'ArrowLeft':
        this.props.onMoveKey('left')
        break
    }
  }

  getLineNumber(textarea) {
    // https://stackoverflow.com/questions/9185630/find-out-the-line-row-number-of-the-cursor-in-a-textarea
    indicator.innerHTML = textarea.value.substr(0, textarea.selectionStart).split("\n").length;
  }

  componentDidMount (){
    console.log('mount column', this.props.k, this.props)
    // set focus
    if (this.props.focusOnRow !== undefined) {
      const focusedEl = this.el.children[this.props.focusOnRow]
      console.log('setfocus on ', this.props.k, this.props.focusOnRow, focusedEl )
      focusedEl.focus() // works but not "visible" in ff when dev panel is open (F12 F12 to understand...)
    }
  }

  render () {
    const {word, rule, hint, date} = this.props.wordEntry
    console.log('render column', this.props.k);
    return (
      <div className='WordsInputForm-wordCol'
        ref={ (el) => {this.el=el} } >
        <input
          placeholder='Word'
          value={word}
          onChange={this.wordChangeHandler}
          onKeyPress={this.inputHandler}
           />
        <TextareaAutosize
          placeholder='Hint'
          value={hint}
          onChange={this.hintChangeHandler}
          defaultValue='lkjmlkj\nlmkj mlk'
          onKeyPress={this.inputHandler} />
        <TextareaAutosize
          placeholder='Rule'
          value={rule}
          onInput={this.ruleChangeHandler}
          onKeyPress={this.inputHandler} />
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
