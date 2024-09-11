import React from "react";
import UserTableContainer from "./features/user/UserTableContainer";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
        User list
      </h1>
      <UserTableContainer />
    </div>
  );
};

export default App;
