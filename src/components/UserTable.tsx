import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectFilteredUsers } from "../features/user/userSlice";
import FilterInput from "./FilterInput";

const UserTable: React.FC = () => {
  const users = useAppSelector(selectFilteredUsers);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200">Name</th>
            <th className="py-2 px-4 bg-gray-200">Username</th>
            <th className="py-2 px-4 bg-gray-200">Email</th>
            <th className="py-2 px-4 bg-gray-200">Phone</th>
          </tr>
          <tr>
            <td>
              <FilterInput filterType="name" />
            </td>
            <td>
              <FilterInput filterType="username" />
            </td>
            <td>
              <FilterInput filterType="email" />
            </td>
            <td>
              <FilterInput filterType="phone" />
            </td>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border">{user.name}</td>
                <td className="py-2 px-4 border">{user.username}</td>
                <td className="py-2 px-4 border">{user.email}</td>
                <td className="py-2 px-4 border">{user.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="py-2 px-4 text-center">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
