import React     from 'react'
import Chip      from 'cozy-ui/react/Chip'
import Button    from 'cozy-ui/react/Button'
import Icon      from 'cozy-ui/react/Icon'
import Avatar    from 'cozy-ui/react/Avatar'
import Checkbox  from 'cozy-ui/react/Checkbox'
import Modal     from 'cozy-ui/react/Modal'
import DicoTable from './DicoTable'
import faker     from 'faker'
import "react-virtualized/styles.css";

class DictionnaryChip extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    const {dico}=this.props
    return (
      <Chip
        style={{ paddingLeft : '0.25rem' }}
        className='dicoChip'
      >
        <Avatar textId={ dico.name } text={dico.initials} size='small' style={{ marginRight: '0.5rem' }}/>
        <Checkbox label='' className='dicoChckBx' />
        {dico.name}
        <Icon icon='gear' />
      </Chip>
    );
  }
}


export class Dictionnaries extends React.Component {

  constructor(props){
    super(props)
    this.props.selectedDico = [
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
    this.state = {modalDisplayed: false}
  }

  render() {
    const props = this.props
    return (
    <div className='dicoContainer'>

      <p className='dicoViewTitle'>{'My dictionnaries'}</p>

      <div className='dicoChipsContainer'>
        <DictionnaryChip dico={{ initials: 'FR',  name: 'Dictionnaire français'}} />
        <DictionnaryChip dico={{ initials: 'IT',  name: 'Dictionnaire italien'}} />
        <DictionnaryChip dico={{ initials: 'EN',  name: 'Dictionnaire anglais'}} />
        <Chip style={{ paddingLeft: '0.25rem' }}>
          <Icon icon='plus' color='blue'/>{'Add a dictionnary'}
        </Chip>
      </div>

      <DicoTable className='dicoTable' dico={props.selectedDico} />

      {
        this.state.modalDisplayed &&
        <Modal
          title='Add new words to "Dictionnaire français"'
          description={'Modal description'}
          dismissAction={() => this.setState({ modalDisplayed: false })}
          // size='xxlarge' // TODO : ne fonctionne pas ?? https://docs.cozy.io/cozy-ui/react/#modal
          into={'body'}
        >
          <h1>contenu html modale</h1>
        </Modal>
        }

    </div>
  )}
}

export default Dictionnaries
