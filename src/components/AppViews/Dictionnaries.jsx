import React from 'react'
import Chip from 'cozy-ui/react/Chip'
import Button from 'cozy-ui/react/Button'
import Icon from 'cozy-ui/react/Icon'
import Avatar from 'cozy-ui/react/Avatar'
import Checkbox from 'cozy-ui/react/Checkbox'
import Modal from 'cozy-ui/react/Modal'
import DicoTable from './DicoTable'
import faker from 'faker'
import "react-virtualized/styles.css";

class DictionnaryChip extends React.Component {
  constructor(props){
    super(props)
    this.state = {isHoovered:false}
  }
  render(){
    return (
      <Chip
        style={{ paddingLeft: '0.25rem' }}
        class={this.state.isHoovered ? 'hoovered' : ''}
        onMouseEnter={()=>{this.state.isHoovered=true; console.log('enter');}}
        onMouseLeave={()=>{this.state.isHoovered=false}}
      >
        <Avatar textId={ this.props.dico.name } text={this.props.dico.initials} size='small' style={{ marginRight: '0.5rem' }}/>
        <Checkbox label='' className='dicoChckBx' />
        {this.props.dico.name}
        <Icon icon='gear' color='grey'/>
      </Chip>
    );
  }
}

// Table data as an array of objects
const list = new Array(100).fill(true).map(() => ({
  ddate: '23/02/1977',
  word: faker.name.findName(),
  hints: faker.name.jobTitle(),
  rules: faker.address.city(),
  score: '12/30'
}));


export class Dictionnaries extends React.Component {

  constructor(props){
    super(props)
    this.state = {modalDisplayed: false}
  }

  render() {
    return (
    <div style="margin-left: 2em">

      <label>{'My dictionnaries'}</label>

      <div>
        <DictionnaryChip dico={{ initials: 'FR',  name: 'Dictionnaire français'}} />
        <DictionnaryChip dico={{ initials: 'IT',  name: 'Dictionnaire italien'}} />
        <DictionnaryChip dico={{ initials: 'EN',  name: 'Dictionnaire anglais'}} />
        <Chip style={{ paddingLeft: '0.25rem' }}>
          <Icon icon='plus' color='blue'/>{'Add a dictionnary'}
        </Chip>
      </div>


      <Button theme='regular' style={{ paddingLeft: '0.25rem' }} onClick={()=>this.setState({ modalDisplayed: !this.state.modalDisplayed })}>
        <Icon icon='plus' color='white'/>
        {'Add new words'}
      </Button>

      <DicoTable list={list}/>

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
