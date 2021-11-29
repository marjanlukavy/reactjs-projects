import React from 'react';
import ReactDOM from 'react-dom';
import EventComponent from './events/EventComponent';
import UserSearch from './refs/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
