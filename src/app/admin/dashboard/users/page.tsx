"use client";
import DashboardUsers from "@/components/dashboard/users/DashboardUsers";
import { fetchUsers } from "@/redux/slices/userSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.user.users);
  const loading = useSelector((state: RootState) => state.user.loading);
  const error = useSelector((state: RootState) => state.user.error);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  if (loading) {
    return <>loading...................</>;
  }
  if (error) {
    return <>erro: {error}</>;
  }
  return <DashboardUsers users={users} />;
};

export default page;
