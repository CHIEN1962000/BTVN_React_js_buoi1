// import logo from './logo.svg';
// import './App.css';

function App() {
  const isUserLoggedIn = true;
  if (isUserLoggedIn) {
    return (
      <div>
          <h1>Hello User</h1>
      </div>
    );
  } else {
    return (
      <div>
          <h1>Login Now</h1>
      </div>
    );
  }
}

export default App;
