import React, { useState } from 'react';
import { USERS } from './users';
import UserCard from './components/usercard';
import './App.css';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showActiveOnly, setShowActiveOnly] = useState(false);

  return (
    <div>
      <h1>Lista de Usuarios</h1>

      <label>
        <input
          type="checkbox"
          checked={showActiveOnly}
          onChange={(e) => setShowActiveOnly(e.target.checked)}
        />
        عرض النشطين فقط
      </label>

      {selectedUser ? (
        <div className="user-details">
          <img src={selectedUser.profileImage} alt={selectedUser.name} />
          <h2>{selectedUser.name}</h2>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Username:</strong> @{selectedUser.username}</p>
          <button onClick={() => setSelectedUser(null)}>رجوع</button>
        </div>
      ) : (
        USERS
          .filter(user => !showActiveOnly || user.isActive)
          .map((user) => (
            <UserCard
              key={user.userId}
              user={user}
              onShowDetails={() => setSelectedUser(user)}
            />
          ))
      )}
    </div>
  );
}

export default App;
