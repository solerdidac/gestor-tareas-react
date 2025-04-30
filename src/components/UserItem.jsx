import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function UserItem({ index, name, isSelected }) {
  const { setSelectedUserIndex } = useContext(UserContext);

  return (
    <li
      style={{ cursor: 'pointer', fontWeight: isSelected ? 'bold' : 'normal' }}
      onClick={() => setSelectedUserIndex(index)}
    >
      {name}
    </li>
  );
}
