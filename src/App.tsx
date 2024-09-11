import React, { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { fetchUsers } from "./features/user/userSlice";
import UserTable from "./components/UserTable";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <UserTable />
    </div>
  );
};

export default App;
