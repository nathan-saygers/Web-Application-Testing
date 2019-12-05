import React from 'react';

const Dashboard = props => {

  return (
    <div>
      <button onClick={() => props.handlePitch('strike')}>Steeerike</button>
      <button onClick={() => props.handlePitch('ball')}>Ball</button>
      <button onClick={() => props.handlePitch('foul')}>Foul Ball</button>
      <button onClick={() => props.handlePitch('hit')}>Hit!</button>
    </div>
  )
}

export default Dashboard;