import React from "react";

interface User {
  userId: string;
  email: string;
  role: string;
}

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div>
      {user ? (
        <div>
          <p>User ID: {user.userId}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
};

export default Dashboard;
