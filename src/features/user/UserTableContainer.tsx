import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchUsers, selectFilteredUsers, setFilter, UserState } from './userSlice';
import UserTable from '../../components/UserTable';

const UserTableContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectFilteredUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilterChange = (filterType: keyof UserState['filters'], value: string) => {
    dispatch(setFilter({ filterType, value }));
  };

  return <UserTable users={users} onFilterChange={handleFilterChange} />;
};

export default UserTableContainer;