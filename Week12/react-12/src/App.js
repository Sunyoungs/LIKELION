import React, { useState } from 'react';
import Login from './components/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginSuccess = () => { setIsLoggedIn(true); };

  return (
    <div className="App">
      { !isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div>
          <h2>로그인 성공!</h2>
          <p>토큰이 localStorage에 저장되었습니다.</p>
        </div>
      )}
    </div>
  );
}

export default App;