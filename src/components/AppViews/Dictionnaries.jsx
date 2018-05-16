import React               from 'react'
import {Route, withRouter} from 'react-router-dom'
import Chip                from 'cozy-ui/react/Chip'
import Icon                from 'cozy-ui/react/Icon'
import Modal               from 'cozy-ui/react/Modal'
import DictionnaryChip     from './DictionnaryChip'
import DicoTable           from './DicoTable'
import WordsInputModal     from './WordsInputModal'


export class Dictionnaries extends React.Component {


  constructor(props){
    super(props)
    // props
    // { selectedDico } = props
    // state
    // console.log(props.match);
    // console.log(props.match.params);
    this.state = {
      modalDisplayed: false,
      selectedDico  : staticDicos[0],
      newWords      : []
    }
    // path mapping
    // console.log('Dico constructor', props.match)
    // if (props.match.params.modalName === "addWords") {
    //   this.state.selectedDico = this.getDicoById(props.match.params.dicoId)
    //   this.state.modalDisplayed = true
    // }
    // bindings
    // this.addWordsHandler = this.addWordsHandler.bind(this)
    // this.editDicoParamHandler = this.editDicoParamHandler.bind(this)
    // this.selectDicoHandler = this.selectDicoHandler.bind(this)
  }


  editDicoParamHandler = (dico) => {
    console.log('editDicoParamHandler', dico.name);
    this.setState({ modalDicoParamDisplayed: !this.state.modalDicoParamDisplayed })
  }


  selectDicoHandler = (dico) => {
    if (dico === this.state.selectedDico) return
    console.log('selectDicoHandler', dico.name);
    this.setState({selectedDico:dico})
  }


  addWordsHandler = () => {
    console.log('addWordsHandler');
    // history.push('/addWords/dico-id-12345')
    this.props.history.push('/dictionnaries/addWords/1')
    // this.setState({ modalWordsDisplayed: !this.state.modalDisplayed })
  }


  // onHideWordsModalHandler = () => this.setState({ modalWordsDisplayed: false })
  onHideWordsModalHandler = () => {
    this.props.history.push('/dictionnaries')
  }


  hideModalDicoParam = () => this.setState({ modalDicoParamDisplayed: false })


  wordsInputChangeHandler = function (newWords) {
    this.state.newWords = newWords
  }

  getDicoById = (dicoId) => {
    return staticDicos[dicoId]
  }

  render() {
    const props = this.props
    const state = this.state
    return (
    // <Route render = ()
    // https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router

    <div className='dicoContainer'>

      <p className='dicoViewTitle'>{'My dictionnaries'}</p>

      <div className='dicoChipsContainer'>

        {staticDicos.map((dico)=>
          <DictionnaryChip
            dico={dico}
            onSelectClick={this.selectDicoHandler}
            onEditParamClick={() => this.editDicoParamHandler(dico)}
            isSelected={this.state.selectedDico===dico} />
        )}
        <Chip style={{ paddingLeft: '0.25rem' }}>
          <Icon icon='plus' color='blue' />{'Add a dictionnary'}
        </Chip>
      </div>

      <DicoTable
        className='dicoTable'
        onAddWordsClick={this.addWordsHandler}
        dico={state.selectedDico} />

      <Route
        path='/dictionnaries/addWords/1'
        render={() =>
          <WordsInputModal
            onHide={this.onHideWordsModalHandler}/>
        }
      >
      </Route>
      {
        // this.state.modalWordsDisplayed &&
        //   <WordsInputModal
        //     onHide={this.onHideWordsModalHandler}
        //     />
      }
      {
        // this.state.modalWordsDisplayed &&
        // <Modal
        //   title='Add new words to "Dictionnaire français"'
        //   dismissAction={this.onHideWordsModalHandler}
        //   size='xxlarge'
        //   into={'body'}
        //   primaryText='Add words'
        //   primaryType='regular'
        //   primaryAction={this.saveNewWords}
        //   secondaryText='Cancel'
        //   secondaryAction={this.onHideWordsModalHandler}
        //   dismissAction={this.onHideWordsModalHandler}
        //   overflowHidden={true}
        // >
        //   <WordsInputForm
        //     onChange={this.wordsInputChangeHandler} />
        // </Modal>
        }

        {
          this.state.modalDicoParamDisplayed &&
          <Modal
            title='"Dictionnaire français" parameters'
            dismissAction={this.hideModalDicoParam}
            size='xxlarge'
            into={'body'}
          >
            <h1>contenu html modale dicoParam</h1>
          </Modal>
          }

    </div>
  )}
}

export default withRouter(Dictionnaries)

const staticWords = [
  {
    "word": "un marchand",
    "word_ok": "marchand",
    "hint": "une marchandise",
    "rule": "",
    "rights": [ "2018-05-10T15:27:09.604Z" ],
    "wrongs": [],
    "soundFile": "un marchand.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parentallllllllllllll",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  }
]

const staticWords2 = [
  {
    "word": "Dico2 italien",
    "word_ok": "marchand",
    "hint": "une marchandise",
    "rule": "",
    "rights": [ "2018-05-10T15:27:09.604Z" ],
    "wrongs": [],
    "soundFile": "un marchand.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "les parents",
    "word_ok": "parents",
    "hint": "un accord parental",
    "rule": "",
    "rights": [ "2018-05-10T15:28:26.400Z", "2018-05-10T15:28:55.978Z" ],
    "wrongs": [],
    "soundFile": "les parents.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  }
]

const staticWords3 = [
  {
    "word": "Dico3 anglais",
    "word_ok": "marchand",
    "hint": "une marchandise",
    "rule": "",
    "rights": [ "2018-05-10T15:27:09.604Z" ],
    "wrongs": [],
    "soundFile": "un marchand.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  },
  {
    "word": "le grand-père",
    "word_ok": "",
    "hint": "",
    "rule": "",
    "rights": [ "2018-05-10T15:29:38.988Z" ],
    "wrongs": [ "2018-05-10T15:29:28.864Z" ],
    "soundFile": "le grand-père.wav",
    "weekDictation": "2018-05-07T02:00:00.000Z"
  }
]

const staticDicos = [
  { initials: 'FR',  name: 'Dictionnaire français', id:'1', words:staticWords},
  { initials: 'IT',  name: 'Dictionnaire italiano' , id:'2', words:staticWords2},
  { initials: 'EN',  name: 'Dictionnaire anglais' , id:'3', words:staticWords3}
]
