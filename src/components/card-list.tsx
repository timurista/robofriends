import * as React from 'react'
import Card from './card';
import { IRobot } from '../containers/app';

const CardList = ({ robots }: { robots: Array<IRobot>}) => {
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