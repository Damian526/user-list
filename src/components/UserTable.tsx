import React from 'react';
import { User } from '../types/user';
import { UserState } from '../features/user/userSlice';

interface UserTableProps {
  users: User[];
  onFilterChange: (filterType: keyof UserState['filters'], value: string) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onFilterChange }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left border-b border-gray-200">Name</th>
            <th className="py-2 px-4 text-left border-b border-gray-200">Username</th>
            <th className="py-2 px-4 text-left border-b border-gray-200">Email</th>
            <th className="py-2 px-4 text-left border-b border-gray-200">Phone</th>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-gray-200">
              <input
                type="text"
                placeholder="Filter by name"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e) => onFilterChange('name', e.target.value)}
              />
            </td>
            <td className="py-2 px-4 border-b border-gray-200">
              <input
                type="text"
                placeholder="Filter by username"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e) => onFilterChange('username', e.target.value)}
              />
            </td>
            <td className="py-2 px-4 border-b border-gray-200">
              <input
                type="text"
                placeholder="Filter by email"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e) => onFilterChange('email', e.target.value)}
              />
            </td>
            <td className="py-2 px-4 border-b border-gray-200">
              <input
                type="text"
                placeholder="Filter by phone"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e) => onFilterChange('phone', e.target.value)}
              />
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.username}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;