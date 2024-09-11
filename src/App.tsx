import React from "react";
import UserTableContainer from "./features/user/UserTableContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <UserTableContainer />
    </div>
  );
};

export default App;
