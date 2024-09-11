import React from "react";
import { User } from "../types/user";

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  if (users.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">No users found.</div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-6 text-left font-semibold text-gray-700">
              Name
            </th>
            <th className="py-3 px-6 text-left font-semibold text-gray-700">
              Username
            </th>
            <th className="py-3 px-6 text-left font-semibold text-gray-700">
              Email
            </th>
            <th className="py-3 px-6 text-left font-semibold text-gray-700">
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="py-3 px-6 border-b border-gray-200">
                {user.name}
              </td>
              <td className="py-3 px-6 border-b border-gray-200">
                {user.username}
              </td>
              <td className="py-3 px-6 border-b border-gray-200">
                {user.email}
              </td>
              <td className="py-3 px-6 border-b border-gray-200">
                {user.phone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
