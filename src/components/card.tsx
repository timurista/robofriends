import * as React from 'react'

interface CardStatelessProps {
  name: string;
  email: string;
  id: number;
  username: string;
}

const Card: React.SFC<CardStatelessProps> = ({ id, name, username, email }) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="user robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;