import * as React from 'react'

interface ISearchBoxProps {
  onSearchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ onSearchChange }: ISearchBoxProps) => {
  return (
    <div className='pa2'>
      <input 
        aria-label="search robots input"
        className='pa3 ba b--green bg-lightest-blue'
        type="search" 
        placeholder="search robots"
        onChange={onSearchChange} />
    </div>
  )
}

export default SearchBox;