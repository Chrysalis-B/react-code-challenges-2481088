import { useState } from 'react';

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`page${darkMode ? ' dark-mode' : ''}`}>
      <button onClick={() => setDarkMode(true)} className='dark-mode-button'>Dark Mode</button>
      <button onClick={() => setDarkMode(false)} className='light-mode-button'>Light Mode</button>
    </div>
  )
}
