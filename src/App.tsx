import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Counter } from './features/counter/Counter.tsx';
import { Users } from './features/users/Users.tsx';

function App() {
  return (
    <>
      <header className="App-header">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="logo" />
        </a>
      </header>
      <main
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Counter />
        <Users />
      </main>
    </>
  );
}

export default App;
