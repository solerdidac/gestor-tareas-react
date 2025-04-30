import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(UserContext);

  const toggle = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      id="themeToggleBtn"
      onClick={toggle}
      style={{ marginTop: 'auto' }}
    >
      {theme === 'light' ? '🌙 Tema' : '☀️ Tema'}
    </button>
  );
}
