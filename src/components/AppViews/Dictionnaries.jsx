import React           from 'react'
import Chip            from 'cozy-ui/react/Chip'
import Icon            from 'cozy-ui/react/Icon'
import Modal           from 'cozy-ui/react/Modal'
import DictionnaryChip from './DictionnaryChip'
import DicoTable       from './DicoTable'

export class Dictionnaries extends React.Component {

  constructor(props){
    super(props)
    // props
    // { selectedDico } = props
    // state
    this.state = {
      modalDisplayed: false,
      selectedDico:staticDicos[0]
    }
    // bindings
    this.addWordsHandler = this.addWordsHandler.bind(this)
    this.editDicoParamHandler = this.editDicoParamHandler.bind(this)
    this.selectDicoHandler = this.selectDicoHandler.bind(this)
  }

  editDicoParamHandler(dico){
    console.log('editDicoParamHandler', dico.name);
    this.setState({ modalDisplayed: !this.state.modalDisplayed })
  }

  selectDicoHandler(dico){
    console.log('selectDicoHandler', dico.name);
    this.setState({selectedDico:dico})
    // this.setState({ modalDisplayed: !this.state.modalDisplayed })
  }

  addWordsHandler(){
    console.log('addWordsHandler');
    this.setState({ modalDisplayed: !this.state.modalDisplayed })
  }

  render() {
    const props = this.props
    const state = this.state
    return (
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

      {
        this.state.modalDisplayed &&
        <Modal
          title='Add new words to "Dictionnaire français"'
          description={'Modal description'}
          dismissAction={() => this.setState({ modalDisplayed: false })}
          size='xxlarge' // TODO : ne fonctionne pas ?? https://docs.cozy.io/cozy-ui/react/#modal
          into={'body'}
        >
          <h1>contenu html modale</h1>
        </Modal>
        }

    </div>
  )}
}

export default Dictionnaries

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
