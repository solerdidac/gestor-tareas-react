import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import UserList from './UserList';
import NewUserForm from './NewUserForm';
import SidebarInfo from './SidebarInfo';
import ThemeToggle from './ThemeToggle';

export default function Sidebar() {
  const { selectedUserIndex } = useContext(UserContext);

  return (
    <aside className="sidebar card">
      <h2>Usuarios</h2>
      <UserList />
      <NewUserForm />
      {selectedUserIndex !== null && <SidebarInfo />}
      <ThemeToggle />
    </aside>
  );
}
