import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import UserItem from './UserItem';

export default function UserList() {
  const { users, selectedUserIndex } = useContext(UserContext);

  if (users.length === 0) {
    return <p>No hay usuarios.</p>;
  }

  return (
    <ul id="userList">
      {users.map((user, index) => (
        <UserItem
          key={index}
          index={index}
          name={user.name}
          isSelected={index === selectedUserIndex}
        />
      ))}
    </ul>
  );
}
