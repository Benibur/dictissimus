import React     from 'react'
import Icon      from 'cozy-ui/react/Icon'
import Chip      from 'cozy-ui/react/Chip'
import Avatar    from 'cozy-ui/react/Avatar'
import Checkbox  from 'cozy-ui/react/Checkbox'
console.log(Checkbox.propTypes);
class DictionnaryChip extends React.Component {

  constructor(props){
    super(props)
    this.onEditParamClick = this.onEditParamClick.bind(this)
  }

  onSelectClick = () => {
    // this.props.isSelected = !this.props.isSelected
    this.props.onSelectClick(this.props.dico)
  }

  onEditParamClick(e) {
    e.stopPropagation()
    this.props.onEditParamClick()
  }

  render(){
    const {dico}=this.props
    return (
      <Chip
        style={{ paddingLeft : '0.25rem' }}
        className={this.props.isSelected ? 'dicoChip dicoChipSelected' : 'dicoChip dicoChipUnSelected'}
        onClick={this.onSelectClick}
      >
        <Avatar textId={ dico.name } text={dico.initials} size='small' style={{ marginRight: '0.5rem' }}/>
        <Checkbox
          label=''
          className='dicoChckBx'
          checked={this.props.isSelected} />
        {dico.name}
        <Icon
          icon='gear'
          onClick={this.onEditParamClick} />
      </Chip>
    );
  }
}

export default DictionnaryChip
