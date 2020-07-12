import React, { ChangeEvent, useState } from 'react';
import { TextInput } from '../styled-components/TextInput'

interface SearchBarProps {
  onSearch: ( text: string ) => void
}

function SearchBar ( { onSearch }: SearchBarProps ) {
  const [text, setText] = useState('');

  const handleInput = ( e: ChangeEvent<HTMLInputElement> ) => {
    const value = e.target.value;
    setText( value );
    onSearch( value );
  };

  return (
    <TextInput shadow iconColor="#333">
      <span className="material-icons icon">search</span>
      <input
        className="search-bar-input"
        type="text"
        value={ text }
        onChange={ handleInput }
      />
    </TextInput>
  )
}

export default SearchBar;
