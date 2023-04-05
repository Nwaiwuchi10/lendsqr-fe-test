import React from "react";
import Login from "./screens/LoginScreen/Login";
import UserProfile from "./screens/UserProfile/UserProfile";
import { Route, Routes } from "react-router-dom";
import UserDetailScreen from "./screens/UserDetails/UserDetailScreen";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<UserProfile />} />
        <Route path="dashboard/user/:id" element={<UserDetailScreen />} />
      </Routes>
    </div>
  );
}

export default App;
