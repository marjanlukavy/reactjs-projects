import { UserProvider } from './context/UserContext';
import Dashboard from './Dashboard';

function App() {
  return (
    <UserProvider>
      <div className="App">hello</div>
      <Dashboard />
    </UserProvider>
  );
}

export default App;
