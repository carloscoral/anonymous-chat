import { useState } from 'react';

/**
 * Hook to save data on local storage
 * @param key {string}
 * @param initialValue:
 */
export function useLocalStorage( key: string, initialValue: any ) {
  const [stored, setStored] = useState( () => {
    try {
      const value = window.localStorage.getItem( key );
      return value ? JSON.parse( value ) : initialValue;
    } catch ( err ) {
      console.error( err );
      return initialValue;
    }
  } );

  const setValue = ( value: any ) => {
    try {
      const newValue = value instanceof Function ? value( stored ) : value;
      setStored( newValue );
      window.localStorage.setItem( key, JSON.stringify( newValue ));
    } catch ( err ) {
      console.error( err );
    }
  };

  return [ stored, setValue ];
}