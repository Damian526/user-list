import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers, selectFilteredUsers } from "./userSlice";
import UserTable from "../../components/UserTable";
import FilterBar from "../../components/FilterBar";

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

  return (
    <div className="container mx-auto p-4">
      <FilterBar />
      <UserTable users={users} />
    </div>
  );
};

export default UserTableContainer;
