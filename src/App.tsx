import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-secondary">
      <header className="flex h-14 justify-between">
        <button className="relative w-10">
          <img src="/images/btn/btn_burger_open.png" alt="burger-button" />
        </button>
        <h1 className="w-[133px]">
          <img src="/images/logo/logo_text.png" alt="logo" />
        </h1>
        <button className="relative pr-2">
          <div className="w-10">
            <img src="/images/btn/btn_user.png" className="mr-2" alt="user-button" />
          </div>
        </button>
      </header>
      <h1 className="text-3xl">粉圓!</h1>
    </div>
  );
}

export default App;
