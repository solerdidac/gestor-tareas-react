import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const [theme, setTheme] = useState('light');

  // Aplicar clase de tema al <body>
  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <UserContext.Provider value={{
      users,
      setUsers,
      selectedUserIndex,
      setSelectedUserIndex,
      theme,
      setTheme
    }}>
      {children}
    </UserContext.Provider>
  );
}
