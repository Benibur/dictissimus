import React from 'react'
import Input from 'cozy-ui/react/Input'
import Button from 'cozy-ui/react/Button'
// import Icon from 'cozy-ui/react/Icon'

export const Dictation = () => (
  <div>
    <p style="margin-left: 0em">{'Go for a dictation :-)'}</p>
    <Input placeholder={'How do you spell this word ?'}></Input>
    <Button subtle size='small' label='Listen again' onClick={() => alert('Clicked listen again')} />
    <Response></Response>
    <Score></Score>
    <DictationHistory></DictationHistory>
  </div>
)

const Response = () => (
  <p>
    {'La bonne réponse était "cing-cent-quatre-vingts"'}
  </p>
);

const Score = () => (
  <p>
    {'Score : '}
    <span>{'9/12'}</span>
  </p>
);

const DictationHistory = () => (
  <div>
    <p>
      <span>
        {'Dictation history'}
      </span>
      <Button size='tiny'>+</Button>
    </p>
    <ul>
      <li>{'(2) cing-cent-quatre-vingts'}</li>
      <li>{'(1) cing-cents'}</li>
    </ul>

  </div>
);

export default Dictation
