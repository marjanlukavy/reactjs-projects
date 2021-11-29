import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Lorem, ipsum dolor.</h1>
      <p>{user.name}</p>
      <button onClick={() => setUser({ name: 'Andy', gender: 'male' })}>
        Click
      </button>
    </div>
  );
};

export default Dashboard;
