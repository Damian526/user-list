import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers, selectFilteredUsers } from "./userSlice";
import UserTable from "../../components/UserTable";

const UserTableContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectFilteredUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <UserTable users={users} />;
};

export default UserTableContainer;
