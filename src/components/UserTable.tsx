import React from "react";
import { User } from "../types/user";
import FilterInput from "./FilterInput";

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left border-b border-gray-200">
              Name
            </th>
            <th className="py-2 px-4 text-left border-b border-gray-200">
              Username
            </th>
            <th className="py-2 px-4 text-left border-b border-gray-200">
              Email
            </th>
            <th className="py-2 px-4 text-left border-b border-gray-200">
              Phone
            </th>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-gray-200">
              <FilterInput filterType="name" />
            </td>
            <td className="py-2 px-4 border-b border-gray-200">
              <FilterInput filterType="username" />
            </td>
            <td className="py-2 px-4 border-b border-gray-200">
              <FilterInput filterType="email" />
            </td>
            <td className="py-2 px-4 border-b border-gray-200">
              <FilterInput filterType="phone" />
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200">
                {user.name}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {user.username}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {user.email}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
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
