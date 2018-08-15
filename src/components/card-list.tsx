import * as React from 'react'
import Card from './card';

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map(({id, name, username, email}) => (
        <Card 
          key={`${username}-${id}`} 
          id={id} 
          name={name} 
          username={username} 
          email={email} 
        />
      ))}
    </div>
  )
}

export default CardList;