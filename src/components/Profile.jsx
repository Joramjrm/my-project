import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('/api/user')
     .then(response => {
        setUser(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <main>
        <h1>Profile</h1>
        <div>
          <label>Name:</label>
          <p>{user.name}</p>
        </div>
        <div>
          <label>Email:</label>
          <p>{user.email}</p>
        </div>
        <div>
          <label>Username:</label>
          <p>{user.username}</p>
        </div>
        <button>Edit Profile</button>
      </main>
    </div>
  );
};

export default Profile;