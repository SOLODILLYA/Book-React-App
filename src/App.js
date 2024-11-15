import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import BookInfo from './BookInfo';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Information About Book</h1>
      <BookInfo />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
