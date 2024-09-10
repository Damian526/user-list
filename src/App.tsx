import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  fetchUsers,
  selectFilteredUsers,
  setFilter,
} from "./features/user/userSlice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectFilteredUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterType: string
  ) => {
    dispatch(
      setFilter({
        filterType: filterType as keyof typeof filters,
        value: e.target.value,
      })
    );
  };

  return (
    <div className="App">
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Filter by name"
        onChange={(e) => handleFilterChange(e, "name")}
      />
      <input
        type="text"
        placeholder="Filter by username"
        onChange={(e) => handleFilterChange(e, "username")}
      />
      <input
        type="text"
        placeholder="Filter by email"
        onChange={(e) => handleFilterChange(e, "email")}
      />
      <input
        type="text"
        placeholder="Filter by phone"
        onChange={(e) => handleFilterChange(e, "phone")}
      />

      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};

export default App;
