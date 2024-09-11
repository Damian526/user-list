import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers, selectFilteredUsers } from "./userSlice";
import UserTable from "../../components/UserTable";

const UserTableContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectFilteredUsers);
  const { status, error } = useAppSelector((state) => state.user);
  

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  if (status === "loading") {
    return <div>Loading users...</div>;
  }

  if (status === "failed") {
    return <div>Error loading users: {error || "Unknown error occurred"}</div>;
  }

  return <UserTable users={users} />;
};

export default UserTableContainer;
