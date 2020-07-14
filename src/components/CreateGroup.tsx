import React, { useState, FormEvent } from 'react'
import { Button } from '../styled-components/Button'
import { useDispatch } from 'react-redux'
import { createGroup, getGroupsCategories } from '../store/chat/actions/chat'

function CreateGroup () {
  const dispatch = useDispatch();
  const [ groupName, setGroupName ] = useState('');
  const [ category, setCategory ] = useState('Friends');
  const categories = getGroupsCategories();

  const handleSubmit = ( e: FormEvent ) => {
    e.preventDefault();
    if ( groupName ) {
      dispatch( createGroup( groupName, category ) );
    }
  };

  return (
    <form className="padded" onSubmit={ handleSubmit }>
      <input
        type="text"
        placeholder="Group name"
        className="extend"
        value={groupName}
        onChange={ ( e ) => setGroupName( e.target.value ) }
      />
      <select className="extend" onChange={ (e) => setCategory( e.target.value ) }>
        {
          categories.map( cate => <option key={cate} value={cate}>{ cate }</option> )
        }
      </select>
      <Button color="#fff" className="extend">
        Create Group
      </Button>
    </form>
  )
}

export default CreateGroup;
