import React, { KeyboardEvent, ChangeEvent, useState } from 'react'
import { BoxShadow } from '../styled-components/BoxShadow';
import { TextInput } from '../styled-components/TextInput'

interface MessageInputProps {
  onSend: ( text: string ) => void
}

function MessageInput ( { onSend }: MessageInputProps ) {
  const [ text, setText ] = useState('');

  const handleSend = () => {
    onSend( text );
    setText( '' );
  }

  const handleEnterKey = (e: KeyboardEvent) => {
    if( e.keyCode === 13) {
      handleSend();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText( e.target.value );
  }

  return (
    <BoxShadow directionShadow="top">
      <TextInput className="limit-width" margin="10px auto" background="#eee">
        <input type="text" value={ text } onChange={ handleChange } onKeyUp={ handleEnterKey } />
        <span className="material-icons icon cursor" onClick={ handleSend }>send</span>
      </TextInput>
    </BoxShadow>
  )
}

export default MessageInput;
