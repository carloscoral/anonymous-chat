import React, { ChangeEvent, useState } from 'react';
import { Text } from '../../styled-components/Text'
import './SearchBar.scss';

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
    <div className="search-bar">
      <Text contrast className="material-icons icon">search</Text>
      <input
        className="search-bar-input"
        type="text"
        value={ text }
        onChange={ handleInput }
      />
    </div>
  )
}

export default SearchBar;
