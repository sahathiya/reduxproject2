import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {fetchUsers}  from '../features/userSlice'; // Import the async thunk

function Userlist() {
  const dispatch = useDispatch();

  // Access state from the Redux store
  const {loading, users, error}  = useSelector(state => state.users);
  console.log(users);
  

  // Fetch users when the component mounts
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(person => (
          <li key={person.id}>
            {person.name} - {person.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Userlist;
